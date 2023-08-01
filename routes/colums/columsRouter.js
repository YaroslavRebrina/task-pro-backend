const express = require("express");
const router = express.Router();

router.get("/addColums");
router.post("/addCart");
router.post("/changeCard");
router.post("/changeCard/:cardId");

module.exports = router;
