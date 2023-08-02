const { Board } = require("../../models/board/board");
const internalServerErrorMessage = require('../../helpers/message')

const createBoard = async (req, res) => {
  try {
    const { name } = req.body;
    const userId = req.user.id;

    const newBoard = await Board.create({ name, user: userId });

    res.status(201).json(newBoard);
  } catch (error) {
    res.status(500).json({ error: internalServerErrorMessage });
  }
};

module.exports = createBoard