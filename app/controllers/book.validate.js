const joi = require("@hapi/joi");
joi.objectId = require("joi-objectid")(joi);

exports.createBook = joi.object({
  bookName: joi.string().required(),
  bookAuther: joi.string().required(),
  bookPageCount: joi.number().required(),
});

exports.editBook = joi.object({
  bookId: joi.string().required(),
  bookName: joi.string().required(),
  bookAuther: joi.string().required(),
  bookPageCount: joi.number().required(),
});

exports.readBookById = joi.object({
  bookId: joi.string().required(),
});

exports.deleteBookById = joi.object({
  bookId: joi.string().required(),
});
