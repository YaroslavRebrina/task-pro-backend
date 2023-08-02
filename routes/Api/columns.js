const express = require('express');

const router = express.Router();

const ctrl = require('../../controllers/columns');

const { validateBody, isValidId, authenticate } = require('../../middlewares');

const { schemas } = require('../../models');

router.get('/', authenticate, ctrl.getAll);

router.post('/', authenticate, validateBody(schemas.addSchema), ctrl.add);

router.put(
  '/:columnId',
  isValidId,
  authenticate,
  validateBody(schemas.addColumnSchema),
  ctrl.updateById
);

router.delete('/:columnId', authenticate, isValidId, ctrl.deleteById);

module.exports = router;
