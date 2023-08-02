const express = require("express");
const router = express.Router();
const controllers = require("../../controllers/boards");

router.post("/boards", controllers.createBoard);
router.get("/boards/:id", controllers.getBoard);
router.put("/boards/:id", controllers.updateBoard);
router.delete("/boards/:id", controllers.deleteBoard);

module.exports = router;