const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    bookName: {
      type: String,
      required: true,
    },
    bookAuther: {
      type: String,
      required: false,
    },
    bookPageCount: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("Books", UserSchema);
