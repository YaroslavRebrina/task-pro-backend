const errTypes = {
  400: "Bad request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not Found",
  409: "Confilct",
};

const errorHandler = (code) => {
  const err = new Error(errTypes[code]);
  err.status = code;
  return err;
};

module.exports = errorHandler;
