const express = require("express");
const { controllerWrapper } = require("../../helpers");
const {
  registration,
  login,
  changeUserSettings,
} = require("../../controllers");
const { userJoiSchema, validateScheme } = require("../../middlwares");
const Joi = require("joi");
const router = express.Router();

router.post(
  "/registration",
  validateScheme(userJoiSchema),
  controllerWrapper(registration)
);
router.patch("/login", validateScheme(userJoiSchema), controllerWrapper(login));
router.post("/logout");
router.patch("/changeUserSettings", controllerWrapper(changeUserSettings));

module.exports = router;
