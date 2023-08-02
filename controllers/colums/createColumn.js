const { Column } = require("../../models/board/column");
const internalServerErrorMessage = require('../../helpers/message')

const createColumn = async (req, res) => {
  const { boardId, title } = req.body;

  const userId = req.user.id;

  try {
    const column = await Column.create({
      title,
      board: boardId,
      user: userId,
    });

    res.status(200).json(column);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: internalServerErrorMessage });
  }
};

module.exports = createColumn;