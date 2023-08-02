const { model, Schema } = require("mongoose");

const columnSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  board: {
    type: Schema.Types.ObjectId,
    ref: "board",
    required: [true, "Board is required"],
  },
  cards: [
    {
      type: Schema.Types.ObjectId,
      ref: "card",
    },
  ],
});

const Column = model("column", columnSchema);

module.exports = Column;