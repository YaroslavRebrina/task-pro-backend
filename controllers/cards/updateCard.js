const { Card } = require("../../models");
const { errorHandler } = require("../../helpers");

const updateCard = async (req, res, next) => {
  try {
    const cardId = req.params.cardId;
    const { title, description, priority, deadline } = req.body;

    const card = await Card.findByIdAndUpdate(
      cardId,
      {
        title,
        description,
        priority,
        deadline,
      },
      { new: true }
    );

    if (!card) {
      throw errorHandler(404);
    }

    res.status(200).json(card);
  } catch (err) {
    next(err);
  }
};

module.exports = updateCard