const { Board } = require('../../models');

const { ctrlWrapper } = require('../../helpers');

const getAll = async (req, res) => {
  const { _id: owner } = req.user;

  const { page = 1, limit = 5 } = req.query;

  const skip = (page - 1) * limit;

  const sorted = { owner };

  const result = await Board.find(sorted, '', {
    skip,
    limit,
  }).populate('owner', 'name email subscription');

  res.json(result);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
};
