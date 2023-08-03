const { User } = require("../../models");
const bcrypt = require("bcrypt");
const gravatar = require("gravatar");
const { errorHandler } = require("../../helpers");

const registration = async (req, res, next) => {
  const { email, password, username } = req.body;

  const avatarURL = gravatar.profile_url(email);
  const hashedPassword = bcrypt.hashSync(password, 10);
  try {
    const result = await User.create({
      username: username,
      password: hashedPassword,
      email,
      avatarURL: avatarURL,
      token: "",
    });

    res.status(200).json({ message: "Registration succesfull" });
  } catch (err) {
    if (err.code === 11000) {
      next(errorHandler(409));
    } else if (err) {
      console.log(err);
      next(errorHandler(400));
    }
  }
};

module.exports = registration;
