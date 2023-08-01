const express = require("express");
const router = express.Router();

router.get("/getCards");
router.post("/addCard");
router.post("/changeCard/:cardId");

module.exports = router;
