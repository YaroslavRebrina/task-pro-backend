const { Board } = require("../../models/board/board");
const {internalServerErrorMessage, boardDeletedSuccessMessage} = require('../../helpers/message')

const deleteBoard = async (req, res) => {
    try {
      const boardId = req.params.id;
      // Знайти дошку за її ід та видалити її
      await Board.findByIdAndDelete(boardId);
  
      res.status(200).json({ message: boardDeletedSuccessMessage });
    } catch (error) {
      res.status(500).json({ error: internalServerErrorMessage});
    }
  };

  module.exports = deleteBoard