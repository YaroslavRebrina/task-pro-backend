const express = require("express");
const router = express.Router();
const controllers = require("../../controllers/colums");

router.post("/columns", controllers.createColumn);
router.get("/columns/:id", controllers.getColumn);
router.put("/columns/:id", controllers.updateColumn);
router.delete("/columns/:id", controllers.deleteColumn);

module.exports = router;