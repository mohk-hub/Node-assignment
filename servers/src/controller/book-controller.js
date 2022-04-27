const express = require("express");
const router = new express.Router();
const bookStoreData = require("../models/book-mod");
var bookController = require("./book-controller");
const upload = require("../utility/storage")
const message = require("../utility/status");
const logger = require("../utility/logger");

exports.addBook = async (req, res) => {
  try {
    upload(req, res, (err) => {
      if (err) return res.send(err);

      var bookData = new bookStoreData({
        NameOfBook: req.body.NameOfBook,
        Description: req.body.Description,
        author: req.body.author
      });
      bookData
        .save()
        .then((result) => {
          res.json(result);
        })
        .catch((err) => {
          res.json(err);
        });
    });
  } catch (e) {
    res.status(message.badRequest).send(e);
  }
};

exports.getBooks = async (req, res) => {
  try {
    const getMens = await bookStoreData.find({}).sort({ ranking: 1 });
    res.status(message.success).send(getMens);
  } catch (e) {
    res.status(message.badRequest).send(e);
  }
};

exports.getBook = async (req, res) => {
  try {
    const _id = req.params.id;
    const getMen = await bookStoreData.findById(_id);
    res.send(getMen);
  } catch (e) {
    res.status(message.badRequest).send(e);
  }
};

exports.updateBook = async (req, res) => {
  
  try {
    upload(req, res, (err) => {
      if (err) return res.json(err);
      logger.info("Server Sent A Hello World!");
      bookStoreData
        .updateOne(
          { _id: req.params.id },
          {
            $set: {
              NameOfBook: req.body.NameOfBook,
              Description: req.body.Description,
              author: req.body.author
            },
          }
        )
        .then((result) => {
          res.status(message.success).send(req.file);
        })
        .catch((err) => {
          res.status(message.badRequest).send("Unable to data Save");
        });
    });
  } catch (e) {
    res.status(message.badRequest).send(e);
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const getMen = await bookStoreData.findByIdAndDelete(req.params.id);
    res.send(`data with id : ${req.params.id} is deleted`);
  } catch (e) {
    res.status(message.serverError).send(e);
  }
};
