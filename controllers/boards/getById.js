const { Board } = require('../../models');

const { HttpError, ctrlWrapper } = require('../../helpers');

const getById = async (req, res) => {
  const { boardId } = req.params;

  const result = await Board.findById(boardId);

  if (!result) {
    throw HttpError(404, 'Not found');
  }

  res.json(result);
};

module.exports = {
  getById: ctrlWrapper(getById),
};
