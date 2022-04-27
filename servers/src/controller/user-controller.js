const userBookStore = require("../models/user-mod");
var jwt = require("jsonwebtoken");
const auth = require("../utility/jwt-logger")
const User = require("../models/user-mod");
const bcrypt = require("bcrypt");
// var crypto = require("crypto");
const message = require("../utility/status");
const logger = require("../utility/logger");
const { alert } = require("../utility/logger");
const session = require("express-session");
// const passport = require("passport");
// const passportLocalMongoose = require("passport-local-mongoose");

// app.use(session({
//   secret: "Our little secret.",
//   resave: false,
//   saveUninitialized: true
// }));

// app.use(passport.initialize());
// app.use(passport.session());

exports.register = async (req, res) => {
  try {
    const { name, email, password, cpassword } = req.body;
    if (!(email && password && name && cpassword)) {
      res.status(message.badRequest).send("All input is required");
    }

    if (password == cpassword) {
      logger.info('password is correct');
    } else {
      alert('password is invalid')
    }

    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.status(message.conflict).send("User Already Exist. Please Login");
    }
    encryptedpassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email: email.toLowerCase(),
      password: encryptedpassword,
      cpassword: encryptedpassword
    });
    res.status(message.success).json(user);
  } catch (err) {
    logger.info("Internal Server Error " + err);
  }
};

exports.showUser = async (req, res) => {
  try {
    const getUsers = await userBookStore.find({});
    res.status(message.created).send(getUsers);
  } catch (e) {
    res.status(message.badRequest).send(e);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      res.status(message.badRequest).send("All input is required");
    }
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
      // user.token = token;
      //.json(user);
      res.header("Authorization", token).send(token)
    }
  } catch (err) {
    logger.info("Internal Server Error");
  }
}

exports.welcome = (req, res) => {
  res.status(message.success).send("Welcome 🙌 ");
}