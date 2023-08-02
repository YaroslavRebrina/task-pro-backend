const express = require("express");
const { controllerWrapper } = require("../../helpers");
const { registration, login } = require("../../controllers");
const { userJoiSchema, validateScheme } = require("../../middlwares");
const Joi = require("joi");
const router = express.Router();

router.post(
  "/registration",
  validateScheme(userJoiSchema),
  controllerWrapper(registration)
);
router.post("/login", validateScheme(userJoiSchema), controllerWrapper(login));
router.post("/logout");
router.patch("/avatar");

module.exports = router;
