const express = require('express');

const router = express.Router();

const ctrl = require('../../controllers/boards');

const { validateBody, isValidId, authenticate } = require('../../middlewares');

const { schemas } = require('../../models');

router.get('/', authenticate, ctrl.getAll);

router.get('/:boardId', authenticate, isValidId, ctrl.getById);

router.post('/', authenticate, validateBody(schemas.addSchema), ctrl.add);

router.put(
  '/:boardId',
  isValidId,
  authenticate,
  validateBody(schemas.addSchema),
  ctrl.updateById
);

router.delete('/:boardId', authenticate, isValidId, ctrl.deleteById);

module.exports = router;
