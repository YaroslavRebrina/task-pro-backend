const { Card } = require("../../models");
const { errorHandler } = require("../../helpers");

const getCard = async (req, res, next) => {
  try {
    const cardId = req.params.cardId;

    const card = await Card.findById(cardId);
    if (!card) {
      throw errorHandler(404);
    }

    res.status(200).json(card);
  } catch (err) {
    next(err);
  }
};

module.exports = getCard