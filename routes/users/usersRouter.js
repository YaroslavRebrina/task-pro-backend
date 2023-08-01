const express = require("express");
const router = express.Router();

router.post("/registration");
router.post("/login");
router.post("/logout");
router.patch('/change')

module.exports = router;
