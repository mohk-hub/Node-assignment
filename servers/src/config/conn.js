const mongoose = require("mongoose");
const logger = require("../utility/logger");
mongoose
  .connect("mongodb://localhost:27017/BookStorageDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    logger.info("connection successful");
  })
  .catch((e) => {
    logger.info(e);
  });
