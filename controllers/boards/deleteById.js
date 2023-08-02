const { Board } = require('../../models');

const { HttpError, ctrlWrapper } = require('../../helpers');

const deleteById = async (req, res) => {
  const { boardId } = req.params;

  const result = await Board.findByIdAndDelete(boardId);

  if (!result) {
    throw HttpError(404, 'Not found');
  }

  res.status(200).json({ message: 'Board deleted' });
};

module.exports = {
  deleteById: ctrlWrapper(deleteById),
};
