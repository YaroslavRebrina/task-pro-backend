const express = require("express");

const router = express.Router();
const ctrl = require("../../controllers/boards");

const { validateBody, isValidId, authenticate } = require("../../middlewares");

// const { schemas } = require("../../models");
const { userSchemas } = require("../../models/newUser");

// тут мы передаём обект борда, а в :id айди пользователя,
router.post("/board/user/:id", authenticate, ctrl.chengeBoard);

//
//
//
//

// router.get("/", authenticate, ctrl.getAll);

// router.get("/:boardId", authenticate, isValidId, ctrl.getById);

// router.post("/", authenticate, validateBody(schemas.addSchema), ctrl.add);

// router.put(
//   "/:boardId",
//   isValidId,
//   authenticate,
//   validateBody(schemas.addSchema),
//   ctrl.updateById
// );

// router.delete("/:boardId", authenticate, isValidId, ctrl.deleteById);

module.exports = router;
