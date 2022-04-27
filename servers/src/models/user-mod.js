const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        require: "Please Enter Email Address"
    },
    password: String,
    cpassword: String,
    token: {
        type: String
    },
});

userSchema.plugin(passportLocalMongoose)

module.exports = new mongoose.model("userBookStore", userSchema);

