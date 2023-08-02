const express = require("express");
const { controllerWrapper } = require("../../helpers");
const { registration } = require("../../controllers");
const { userJoiSchema, validateScheme } = require("../../middlwares");
const Joi = require("joi");
const router = express.Router();

router.post(
  "/registration",
  validateScheme(userJoiSchema),
  controllerWrapper(registration)
);
router.post("/login");
router.post("/logout");
router.patch("/avatar");

module.exports = router;
