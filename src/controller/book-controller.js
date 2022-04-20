const Books = require('../models/book-mod');
const message = require("../utility/status")

exports.createBook = async (req, res) => {
    try {
        const addingBooksRecords = new Books(req.body);
        console.log(req.body);
        const insertBooks = await addingBooksRecords.save();
        res.status(message.CREATED).send(insertBooks);
    }
    catch (e) {
        res.status(message.BAD_REQUEST).send(e);
    }
}

exports.getBook = async (req, res) => {
    try {
        const getBooks = await Books.find({});
        res.status(message.CREATED).send(getBooks);
    }
    catch (e) {
        res.status(message.BAD_REQUEST).send(e);
    }
}

exports.getBookById = async (req, res) => {
    try {
        const _id = req.params.id;
        const getBook = await Books.findById(_id)
        res.status(message.CREATED).send(getBook);
    }
    catch (e) {
        res.status(message.BAD_REQUEST).send(e);
    }
}

exports.updateBook = async (req, res) => {
    try {
        const _id = req.params.id;
        const getBook = await Books.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.status(message.CREATED).send(getBook);
    }
    catch (e) {
        res.status(message.BAD_REQUEST).send(e);
    }
}

exports.deleteBook = async (req, res) => {
    try {
        const _id = req.params.id;
        const getBook = await Books.findByIdAndDelete(_id);
        res.status(message.CREATED).send(`book with id ${_id} deleted`);
    }
    catch (e) {
        res.status(message.INTERNAL_ERROR).send(e);
    }
}