const { model, Schema } = require("mongoose");
const Joi = require("joi");

const emailRegexp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const passRegexp =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,64}$/;

const userSchema = new Schema({
  username: { type: String, required: [true, "Username is required"] },
  email: {
    type: String,
    match: emailRegexp,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    match: passRegexp,
    required: [true, "Set password for user"],
  },
  avatarURL: { type: String },
  token: { type: String },
  theme: { type: String, enum: ["DARK", "LIGHT", "VIOLET"], default: "LIGHT" },
  boards: [],
});

const registerSchema = Joi.object({
  username: Joi.string().require(),
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().pattern(passRegexp).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().pattern(passRegexp).required(),
});

const boardSchema = Joi.object({
  id: Joi.string().required(),
  title: Joi.string().required(),
  icon: Joi.string().required(),
  background: Joi.string().required(),
  boardsData: Joi.object()
    .keys({
      tasks: Joi.object()
        .pattern(
          Joi.string(),
          Joi.object({
            id: Joi.string().required(),
            title: Joi.string().required(),
            description: Joi.string().required(),
            priority: Joi.string(),
            deadline: Joi.string(),
          })
        )
        .default({}),
      columns: Joi.object()
        .pattern(
          Joi.string(),
          Joi.object({
            id: Joi.string().required(),
            title: Joi.string().required(),
            taskIds: Joi.array().items(Joi.string()),
          })
        )
        .default({}),
      columnOrder: Joi.array().items(Joi.string()).required().default([]),
    })
    .required(),
});

const userSchemas = {
  registerSchema,
  loginSchema,
  boardSchema,
};

const User = model("user", userSchema);

module.exports = {
  User,
  userSchemas,
};
