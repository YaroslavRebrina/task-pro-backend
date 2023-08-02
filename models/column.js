const { Schema, model } = require("mongoose");

const columnSchema = new Schema(
  {
    columnOwner: {
      type: Schema.Types.ObjectId,
      ref: "board",
    },
    title: {
      type: String,
      required: [true, "Set title for column"],
    },
  },
  { versionKey: false, timestamps: false }
);

const Column = model("column", columnSchema);

module.exports = { Column };
