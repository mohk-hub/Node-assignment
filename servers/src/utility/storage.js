var multer = require("multer");
var Stroge = multer.diskStorage({
  destination: (req, file, next) => {
    next(null, "public/images/");
  },
  filename: (req, file, next) => {
    next(null, file.originalname);
  },
});

var upload = multer({
  storage: Stroge,
}).single("image");

module.exports = upload;
