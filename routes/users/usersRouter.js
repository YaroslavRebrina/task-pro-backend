const express = require("express");
const { controllerWrapper } = require("../../helpers");
const { registration, login, update } = require("../../controllers");
const { userJoiSchema, validateScheme, auth } = require("../../middlwares");
const Joi = require("joi");
const router = express.Router();

router.post(
  "/registration",
  validateScheme(userJoiSchema),
  controllerWrapper(registration)
);
router.patch("/login", validateScheme(userJoiSchema), controllerWrapper(login));

router.post("/logout");

router.patch(
  "/update",
  auth,
  // validateScheme(userJoiSchema),
  controllerWrapper(update)
);

module.exports = router;
