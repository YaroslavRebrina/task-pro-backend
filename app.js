const express = require("express");
const { connect } = require("mongoose");
const cors = require("cors");
const { usersRouter, boardRouter } = require("./routes");

const { DB_LINK } = process.env;

const app = express();

connect(DB_LINK)
  .then(() => console.log("Succesful connection with database"))
  .catch((e) => {
    console.log(e.message);
    process.exit(1);
  });

app.use(cors());
app.use(express.json());

app.use("api/users", usersRouter);
app.use("api/colums", boardRouter);

app.use((req, res) => {
  res.status(400).json({ message: "Not Found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
