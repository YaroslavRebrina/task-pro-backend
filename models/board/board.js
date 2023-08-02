const { model, Schema } = require("mongoose");

const boardSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  background: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: [true, "User is required"],
  },
  columns: [
    {
      type: Schema.Types.ObjectId,
      ref: "column",
    },
  ],
});

const Board = model("board", boardSchema);

module.exports = Board;