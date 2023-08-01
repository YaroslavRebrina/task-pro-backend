const errorHandler = require("./errorHandler");

const controllerWrapper = (controller) => {
  return async (req, res, next) => {
    try {
      controller(req, res, next);
    } catch (err) {
      if (err.code === 11000) {
        next(errorHandler(409));
      }
      next(err);
    }
  };
};

module.exports = controllerWrapper;
