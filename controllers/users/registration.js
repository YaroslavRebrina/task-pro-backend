const { User } = require("../../models");
const bcrypt = require("bcrypt");
const gravatar = require("gravatar");
const { errorHandler } = require("../../helpers");
const JWT = require("jsonwebtoken");

const registration = async (req, res, next) => {
  const { email, password, username } = req.body;
  const { SECRET_KEY } = process.env;

  if (!email || !password || !username) {
    throw errorHandler(400);
  }

  const avatarURL = gravatar.profile_url(email);
  const hashedPassword = bcrypt.hashSync(password, 10);
  try {
    const payload = {
      id: email,
    };

    const JWT_TOKEN = JWT.sign(payload, SECRET_KEY, {
      expiresIn: "1h",
    });

    const result = await User.create({
      username: username,
      password: hashedPassword,
      email,
      avatarURL: avatarURL,
      token: "",
    });

    res.status(200).json({
      username: result.username,
      email: result.email,
      token: JWT_TOKEN,
    });
    
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
