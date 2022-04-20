const express = require('express');
// const mongoose = require('mongoose');

const authMiddleware = require('../middleware/auth');

const router = new express.Router();

const bookController = require('../controller/book-controller');


router.post("/book",authMiddleware, bookController.createBook)

router.get("/book",authMiddleware, bookController.getBook)

router.get("/book/:id",authMiddleware, bookController.getBookById)

router.patch("/book/:id",authMiddleware, bookController.updateBook)

router.delete("/book/:id",authMiddleware, bookController.deleteBook)


module.exports = router;