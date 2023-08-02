const { Board } = require("../../models/board/board");
const internalServerErrorMessage = require('../../helpers/message')

const updateBoard = async (req, res) => {
    try {
      const boardId = req.params.id;
      const { name } = req.body;
  
      // Знайти дошку за її ід та оновити
      const updatedBoard = await Board.findByIdAndUpdate(boardId, { name }, { new: true });
  
      res.status(200).json(updatedBoard);
    } catch (error) {
      res.status(500).json({ error: internalServerErrorMessage });
    }
  };

  module.exports =  updateBoard