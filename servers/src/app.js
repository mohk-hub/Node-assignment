const express = require("express");
const app = express();
require("./config/conn");
const port = process.env.PORT || 5000;
const router = require("./routers/book-routes")
const userRouter = require("./routers/user-routes")
const http = require("http");
const server = http.createServer(app);
const dotenv = require("dotenv");
const logger = require("./utility/logger");
require('dotenv').config({ path: '../.env' });
dotenv.config();
app.use(express.json());
app.use(router);
app.use(userRouter);
app.get("/", async (req, res) => {
  res.send("Hello from the Book Store");
});
app.listen(port, () => {
  logger.info(`connection is live at port no. ${port}`);
});
