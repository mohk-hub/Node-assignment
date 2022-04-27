const express = require("express");
const router = new express.Router();
const cors = require('cors');
// const bookStoreData = require("../models/book-mod");
const auth = require("../middleware/auth");
var bookController = require("../controller/book-controller")
router.use(cors())
router.post("/bookStore", auth, cors(), bookController.addBook);
router.get("/bookStore", auth, cors(), bookController.getBooks);
router.get("/bookStore/:id", auth, cors(), bookController.getBook);
router.put("/bookStore/:id", auth, cors(), bookController.updateBook);
router.delete("/bookStore/:id", auth, cors(), bookController.deleteBook);
module.exports = router;

// {
//     "NameOfBook":"13 reason why",
//     "Description":"depression",
//     "author":"Jay Asher"
// }


// when you had to make a great decision fast. what will you do?