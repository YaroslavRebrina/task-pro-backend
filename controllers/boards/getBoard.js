const { Board } = require("../../models/board/board");
const internalServerErrorMessage = require('../../helpers/message')

const getBoard = async (req, res) => {
    try {
      const userId = req.user.id; 
  
      // Отримати усі дошки, користувача
      const boards = await Board.find({ user: userId });
  
      res.status(200).json(boards);
    } catch (error) {
      res.status(500).json({ error: internalServerErrorMessage });
    }
  };

  module.exports = getBoard