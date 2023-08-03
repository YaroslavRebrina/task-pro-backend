const e = require("express");
const { errorHandler } = require("../../helpers");
const { User } = require("../../models");
const bcrypt = require("bcrypt");

const update = async (req, res, next) => {
  const { _id } = req.user;

  if (!_id) {
    throw errorHandler(403);
  }
  const user = await User.findById(_id);

  if (!user) {
    throw errorHandler(400);
  }

  const fieldToUpdate = Object.keys(user._doc).map((item) => {
    if (Object.keys(req.body).includes(item)) {
      return item;
    }
  });

  const updatedUser = user;

  for (let e of fieldToUpdate) {
    if (e !== undefined) updatedUser[e] = req.body[e];
    if (e === "password") {
      const hashedPassword = bcrypt.hashSync(req.body[e], 10);
      updatedUser[e] = hashedPassword;
    }
  }

  delete updatedUser._doc._id;
  delete updatedUser._doc.__v;

  console.log(updatedUser._doc);
  const newUser = await User.findByIdAndUpdate(
    _id,
    { ...updatedUser },
    { new: true }
  );

  res.status(200).json({ data: newUser });
};

module.exports = update;
