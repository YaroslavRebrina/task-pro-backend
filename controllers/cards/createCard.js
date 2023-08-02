const { Card, Column } = require("../../models");
const { errorHandler } = require("../../helpers");

const createCard = async (req, res, next) => {
  try {
    const { title, description, priority, deadline, columnId } = req.body;

    const column = await Column.findById(columnId);
    if (!column) {
      throw errorHandler(404);
    }

    // Створення нової картки
    const newCard = await Card.create({
      title,
      description,
      priority,
      deadline,
      column: columnId, // прив'язка до колонки
    });

    res.status(201).json(newCard);
  } catch (err) {
    next(err);
  }
};

module.exports = createCard