const express = require("express");

const { controllerWrapper } = require("../../helpers");
const {
  registration,
  login,
  changeUserSettings,
} = require("../../controllers");
const { validateScheme } = require("../../middlwares");
const { userSchemas } = require("../../models/newUser");

const router = express.Router();

router.post(
  "/registration",
  validateScheme(userSchemas.registerSchema),
  controllerWrapper(registration)
);

router.post(
  "/login",
  validateScheme(userSchemas.loginSchema),
  controllerWrapper(login)
);

router.post("/logout");

router.patch("/changeUserSettings", controllerWrapper(changeUserSettings));

module.exports = router;
