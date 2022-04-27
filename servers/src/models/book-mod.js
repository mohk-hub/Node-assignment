const mongoose = require("mongoose");
const menSchema = new mongoose.Schema({
  NameOfBook: {
    type: String,
    required: true,
    trim: true,
  },
  Description: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  }
});

module.exports =  mongoose.model("BookStoreData", menSchema);
