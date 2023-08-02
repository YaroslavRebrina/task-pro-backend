const { model, Schema } = require("mongoose");

const cardSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  description: {
    type: String,
  },
  priority: {
    type: String,
  },
  deadline: {
    type: Date,
  },
  column: {
    type: Schema.Types.ObjectId,
    ref: "column",
    required: [true, "Column is required"],
  },
});

const Card = model("card", cardSchema);

module.exports = Card;