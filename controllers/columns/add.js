const { Column } = require('../../models');

const { ctrlWrapper } = require('../../helpers');

const add = async (req, res) => {
  const { _id: owner } = req.user;

  const result = await Column.create({ ...req.body, owner });

  res.status(201).json(result);
};

module.exports = {
  add: ctrlWrapper(add),
};
