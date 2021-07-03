const utils = require("./utils");

const JoiMiddleware = (schema, property = "body") => {
  return (req, res, next) => {
    const { error } = schema.validate(req[property], {
      convert: true,
      errors: {
        wrap: {
          label: "",
        },
      },
      abortEarly: false,
    });
    const valid = error == null;
    if (valid) {
      next();
    } else {
      const { details } = error;
      utils.handleError(res, details[0].message.replace(/_/g, " "));
    }
  };
};

module.exports = JoiMiddleware;
