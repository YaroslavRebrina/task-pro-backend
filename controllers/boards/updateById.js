const { Board } = require('../../models');

const { HttpError, ctrlWrapper } = require('../../helpers');

const updateById = async (req, res) => {
  const { boardId } = req.params;

  const result = await Board.findByIdAndUpdate(boardId, req.body, {
    new: true,
  });

  if (!result) {
    throw HttpError(404, 'Not found');
  }
  res.json(result);
};

module.exports = {
  updateById: ctrlWrapper(updateById),
};
