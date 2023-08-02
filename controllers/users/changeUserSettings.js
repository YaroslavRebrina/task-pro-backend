const { errorHandler } = require("../../helpers");
const { User } = require("../../models");

const changeUserSettings = async (req, res, next) => {
  const { _id } = req.user;

  const user = await User.findById(_id);

  if (!user) {
    throw errorHandler(400);
  }

  const result = { ...user, ...req.body };
  const newUser = await User.updateOne({ ...user, ...result });

  res.status(200).json({ data: newUser });
};

module.exports = changeUserSettings;
