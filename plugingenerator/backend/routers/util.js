var nodemailer = require("nodemailer");
const express = require("express");
const router = express.Router();

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  port: 465, // true for 465, false for other ports
  host: "smtp.gmail.com",
  auth: {
    user: "newsletterpluginfree@gmail.com",
    pass: "ymmmiupcfswlyppb",
  },
  secure: true,
});

const mailData = {
  from: "newsletterpluginfree@gmail.com", // sender address
  to: "harshsrivastava870@gmail.com", // list of receivers
  subject: "Sending Email using Node.js",
  text: "That was easy!",
  html: "<b>Hey there! </b><br> This is our first message sent with Nodemailer<br/>",
};

transporter.sendMail(mailData, function (err, info) {
  if (err) console.log(err);
  else console.log(info);
});

module.exports = router;
