const express = require("express");
const cors = require("cors");
const { connect } = require("mongoose");
const { usersRouter, boardRouter } = require("./routes");
// const boardsRouter = require("./routes/api/boards");
// const columnsRouter = require("./routes/api/columns");
// const cardsRouter = require("./routes/api/cards");

require("dotenv").config();

const app = express();
const { DB_USER, DB_PASSWORD } = process.env;

connect(
  `mongodb+srv://${DB_USER}:${DB_PASSWORD}@taskpro.dnaisfp.mongodb.net/TaskPro?retryWrites=true&w=majority`
)
  .then(() => console.log("Succesful connection with database"))
  .catch((e) => {
    console.log(e.message);
    process.exit(1);
  });

app.use(cors());
app.use(express.json());

app.use("/api/users", usersRouter);
app.use("/api/colums", boardRouter);
// app.use("/api/boards", boardsRouter);
// app.use("/api/columns", columnsRouter);
// app.use("/api/cards", cardsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not Found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
