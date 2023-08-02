const { Column } = require('../../models');

const { HttpError, ctrlWrapper } = require('../../helpers');

const updateById = async (req, res) => {
  const { columnId } = req.params;

  const result = await Column.findByIdAndUpdate(columnId, req.body, {
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
