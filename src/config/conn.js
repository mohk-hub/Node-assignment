const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/storeDB", {

  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("connection successful");
}).catch((e) => {
  console.log("No connection");
})


// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/bookstore";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("bookstore");
//   dbo.createCollection("users", function(err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     db.close();
//   });
//   dbo.createCollection("books", function(err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     db.close();
//   });
// });