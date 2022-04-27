const express = require("express");
const userRouter = new express.Router();
var userController = require("../controller/user-controller")
require("dotenv").config();
const cors = require('cors');


const dotenv = require("dotenv");
require("dotenv").config({ path: "../../.env" });
dotenv.config();
const app = express();
const bcrypt = require("bcrypt");
app.use(express.json());
var jwt = require("jsonwebtoken");
const auth = require("../utility/jwt-logger");
const User = require("../models/user-mod");

userRouter.use(cors())


userRouter.post("/register",cors(), userController.register);
userRouter.post("/login", cors(),userController.login);
userRouter.get("/userList", userController.showUser);
userRouter.post("/welcome", auth, userController.welcome);

module.exports = userRouter;

    // { 
    //     "name":"mohk", 
    //     "email":"mohk@gmail.com",
    //     "password":"123",
    //     "cpassword":"123"
    // }