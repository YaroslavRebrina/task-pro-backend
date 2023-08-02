const { Column } = require('../../models');

const { HttpError, ctrlWrapper } = require('../../helpers');

const deleteById = async (req, res) => {
  const { columnId } = req.params;

  const result = await Column.findByIdAndDelete(columnId);

  if (!result) {
    throw HttpError(404, 'Not found');
  }

  res.status(200).json({ message: 'Column deleted' });
};

module.exports = {
  deleteById: ctrlWrapper(deleteById),
};
