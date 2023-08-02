const express = require("express");
const cors = require("cors");
const { connect } = require("mongoose");
const { usersRouter, boardRouter } = require("./routes");

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

app.use((req, res) => {
  res.status(400).json({ message: "Not Found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
