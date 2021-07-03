const { ObjectID } = require("mongodb");
const utils = require("../middleware/utils");
const Book = require("../models/book");

exports.create = async (req, res) => {
  try {
    // Your business logic here
    const bookObject = new Book({
      bookName: req.body.bookName,
      bookAuther: req.body.bookAuther,
      bookPageCount: req.body.bookPageCount,
    });
    await bookObject.save();
    utils.handleSuccess(res, [], "Book created successfully !");
  } catch (error) {
    utils.handleError(res, error);
  }
};

exports.edit = async (req, res) => {
  try {
    const { bookId } = req.body;
    const updateObject = {
      bookName: req.body.bookName,
      bookAuther: req.body.bookAuther,
      bookPageCount: req.body.bookPageCount,
    };

    await Book.findByIdAndUpdate(ObjectID(bookId), updateObject);
    utils.handleSuccess(res, [], "Book updated successfully !");
  } catch (error) {
    utils.handleError(res, error);
  }
};

exports.delete = async (req, res) => {
  try {
    const { bookId } = req.params;
    await Book.findByIdAndDelete(bookId);
    utils.handleSuccess(res, [], "Book Deleted successfully ");
  } catch (error) {
    utils.handleError(res, error);
  }
};

exports.getData = async (req, res) => {
  try {
    const { bookId } = req.params;
    const bookData = await Book.findById(bookId);
    utils.handleSuccess(res, bookData, "Book details fetched !");
  } catch (error) {
    utils.handleError(res, error);
  }
};
