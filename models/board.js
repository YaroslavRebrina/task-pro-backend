const { Schema, model } = require("mongoose");

const iconList = [
  "project",
  "star",
  "loading",
  "puzzle-piece",
  "container",
  "lightning",
  "colors",
  "hexagon",
];

const boardSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    title: {
      type: String,
      required: [true, "Set title for board"],
    },
    icon: {
      type: String,
      enum: iconList,
      default: "project",
    },
    background: {
      type: String,
      default: "blank",
    },
  },
  { versionKey: false, timestamps: false }
);

const Board = model("board", boardSchema);

module.exports = { Board };
