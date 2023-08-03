const express = require("express");
const sendHelpRequest = require("../../services/email/send_help_request");

const router = express.Router();

router.post("/send_help_request", sendHelpRequest);

module.exports = router;