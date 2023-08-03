const Joi = require("joi");

const userJoiSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
  email: Joi.string().required(),
  subscription: Joi.string()
    .valid("starter", "pro", "business")
    .default("starter"),
  avatarURL: Joi.string(),
  token: Joi.string().token().default(""),
  theme: Joi.string().valid("DARK", "LIGHT", "VIOLET").default("LIGHT"),
});

module.exports = userJoiSchema;
