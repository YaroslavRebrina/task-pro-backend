const express = require("express");
const router = express.Router();
const controllers = require("../../controllers/cards");

router.post("/cards", controllers.createCard);
router.get("/cards/:id", controllers.getCard);
router.put("/cards/:id", controllers.updateCard);
router.delete("/cards/:id", controllers.deleteCard);

module.exports = router;