const usersRouter = require("./users/usersRouter");
const boardRouter = require("./colums/boardRouter");
const boardsRouter = require("./boards/boardsRouter");
const columnRouter = require("./boards/columnRouter");
const cardRouter = require("./boards/cardRouter");

module.exports = {
  usersRouter,
  boardRouter,
  boardsRouter,
  columnRouter,
  cardRouter,
};
