const express = require('express');
require("./src/config/conn");
const router = require("./src/routes/book-routes");
const userRouter = require('./src/routes/user-routes')
const app = express();
const port = process.env.PORT || 8080;

app.get("/", async (req, res) => {
    res.send("welcome to book store");
})


app.use(express.json());
app.use(router);
app.use(userRouter);

app.listen(port, () => {
    console.log(`Server Started at Port ${port}`);
})