const cryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');
const Users = require('../models/user-mod');
const message = require('../utility/status')

exports.register = async (req, res) => {
    try {

        const addingUsersRecords = new Users(req.body);
        // console.log(req.body);

        // crypto check 
        var cybertext = cryptoJS.AES.encrypt(JSON.stringify(req.body.password), 'secret key 123').toString();

        console.log(cybertext);



        addingUsersRecords.password = cybertext;


        const insertUsers = await addingUsersRecords.save();
        res.status(message.CREATED).send(insertUsers);
        // }
    }
    catch (e) {
        res.status(message.BAD_REQUEST).send(e);
    }
}

exports.login = async (req, res) => {
    try {

        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
    

        const userEmail = await Users.findOne({ email: email });
        var cybertext = userEmail.password;
        var bytes = cryptoJS.AES.decrypt(cybertext, 'secret key 123');
        var originalText = bytes.toString(cryptoJS.enc.Utf8);

        var accessToken = jwt.sign(name , "helloworldthisisjsonwebtoken")

        const passwordOne = JSON.stringify(password);
        if (originalText === passwordOne) {
            res.send({
                name,
                email,
                password,
                accessToken
            });
            // console.log(userEmail);
            // console.log(accessToken);
        } else {
            res.send("wrong password");
        }
    }
    catch (error) {
        res.status(message.BAD_REQUEST).send("Invalid Email");
    }

}