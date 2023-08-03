const JWT = require("jsonwebtoken");
const { errorHandler } = require("../helpers");
const { User } = require("../models");

const isAuthorized = async (req, _, next) => {
  const { authorization } = req.headers;
  const [type, token] = authorization.split(" ");
  const { SECRET_KEY } = process.env;

  if (type !== "Bearer") {
    throw errorHandler(401);
  }

  try {
    const tokenIsVerified = JWT.verify(token, SECRET_KEY);

    const user = await User.findById(tokenIsVerified.id);

    if (!user) {
      throw errorHandler(401);
    }

    req.user = user;
    next();
  } catch (err) {
    if (err.message === "invalid token" || err.message === "jwt expired") {
      next(errorHandler(401));
    }
    next(err);
  }
};

module.exports = isAuthorized;
