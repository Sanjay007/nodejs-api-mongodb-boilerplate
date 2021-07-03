//  These are some commom utility methods
exports.removeExtensionFromFile = (file) => {
  return file.split(".").slice(0, -1).join(".").toString();
};

/**
 * Handles error by printing to console in development env and builds and sends an error response
 * @param {Object} res - response object
 * @param {Object} err - error object
 */
exports.handleError = (res, err) => {
  res.status(400).json({
    response: {
      dataset: [],
      status_code: false,
      message: err.message ? err.message : err,
    },
  });
};
/**
 * Handles success by printing to console in development env and builds and sends an error response
 * @param {Object} res - response object
 * @param {Object} err - error object
 */
exports.handleSuccess = (res, resultSet, message) => {
  res.status(200).json({
    response: {
      dataset: resultSet,
      status_code: true,
      message: message,
    },
  });
};

/**
 * handle unauthentication error
 * @param {Object} res - response object
 * @param {Object} err - error object
 */
exports.handleUnauthorized = (res, err) => {
  res.status(401).json({
    response: {
      dataset: [],
      status: 0,
      message: err.message ? err.message : err,
    },
  });
};
