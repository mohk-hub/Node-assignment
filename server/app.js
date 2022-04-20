const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.post("/send_email", (req, res) => {
let { text } = req.body;

const transporter = nodemailer.createTransport(smtpTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
    user: 'mohak1802bhal@gmail.com',
    pass: 'ardivhlxxfnkosxh'
  }
}));

var mailOptions = {
  from: 'mohak1802bhal@gmail.com',
  to: 'mohak1802bhal@gmail.com',
  subject: 'Sending Email using Node.js[nodemailer]',
  html: `<div className="email" style="
      border: 1px solid black;
      padding: 20px;
      font-family: sans-serif;
      line-height: 2;
      font-size: 20px;">
      <h2>Here is your email!</h2>
      <p>${text}</p>
      <p>All the best, Darwin</p>
      </div>`,
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
    
  } else {

    res.sendStatus(200);
  }
});  

 })

app.listen(8080,(req,res)=>{
  console.log("Server started at port 8080");
})
