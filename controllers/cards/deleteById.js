const { Card } = require('../../models');

const { HttpError, ctrlWrapper } = require('../../helpers');

const deleteById = async (req, res) => {
  const { cardId } = req.params;

  const result = await Card.findByIdAndDelete(cardId);

  if (!result) {
    throw HttpError(404, 'Not found');
  }

  res.status(200).json({ message: 'Card deleted' });
};

module.exports = {
  deleteById: ctrlWrapper(deleteById),
};
