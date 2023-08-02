const errorHandler = require("../helpers/errorHandler");

const validateBody = (scheme) => {
  const func = (req, res, next) => {
    const { error } = scheme.validate(req.body);
    if (error) {
      next(errorHandler(400));
    }
    next();
  };

  return func;
};

module.exports = validateBody;
