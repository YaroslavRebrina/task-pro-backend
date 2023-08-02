const { Schema, model } = require("mongoose");
const joi = require("joi");
const { controllerWrapper } = require("../helpers");

const priorityList = ["Without priority", "Low", "Medium", "High"];

const cardSchema = new Schema(
  {
    cardOwner: {
      type: Schema.Types.ObjectId,
      ref: "column",
    },
    title: {
      type: String,
      required: [true, "Set title for card"],
    },
    description: {
      type: String,
      default: "",
    },
    priority: {
      type: String,
      enum: priorityList,
      default: "Without priority",
    },
    deadline: {
      type: Date,
      default: Date.now(),
    },
  },
  { versionKey: false, timestamps: false }
);

cardSchema.post("save", controllerWrapper);

const Card = model("card", cardSchema);

const addCardSchema = joi.object({
  // name: joi.string().required(),
  // email: joi.string().required(),
  // phone: joi.string().required(),
  // favorite: joi.boolean(),
});

const updateCardSchema = joi.object({
  // favorite: joi.boolean().required(),
});

const schemas = { addCardSchema, updateCardSchema };

module.exports = { Card, schemas };
