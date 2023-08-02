const express = require('express');

const router = express.Router();

const ctrl = require('../../controllers/cards');

const { validateBody, isValidId, authenticate } = require('../../middlewares');

const { schemas } = require('../../models');

router.get('/', authenticate, ctrl.getAll);

router.post('/', authenticate, validateBody(schemas.addSchema), ctrl.add);

router.put(
  '/:cardId',
  isValidId,
  authenticate,
  validateBody(schemas.addCardSchema),
  ctrl.updateById
);

router.delete('/:cardId', authenticate, isValidId, ctrl.deleteById);

module.exports = router;
