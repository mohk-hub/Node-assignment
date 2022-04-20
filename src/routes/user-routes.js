const express = require('express');
require("../config/conn")
const router = express.Router();

const userController = require('../controller/user-controller');

router.post("/register", userController.register)

router.post("/login", userController.login)



module.exports = router;