const { Card } = require("../../models");
const сardDeletedSuccessMessage = require('../../helpers/message')
const { errorHandler } = require("../../helpers");

const deleteCard = async (req, res, next) => {
  try {
    const cardId = req.params.cardId;

    const card = await Card.findByIdAndDelete(cardId);

    if (!card) {
      throw errorHandler(404);
    }

    res.status(200).json({ message: сardDeletedSuccessMessage });
  } catch (err) {
    next(err);
  }
};

module.exports = deleteCard