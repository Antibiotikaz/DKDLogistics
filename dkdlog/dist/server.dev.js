"use strict";

var express = require("express");

var cors = require("cors");

var app = express();

var nodemailer = require("nodemailer");

app.use(cors());
app.use(express.json());
app.listen(5000, function () {
  return console.log("Server Running");
});
var contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "willie@dkdlogistics.com",
    pass: "dkdlogistics123"
  }
});
contactEmail.verify(function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});
router.post("/contact", function (req, res) {
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;
  var mail = {
    from: name,
    to: "willie@dkdlogistics.com",
    subject: "Contact Form Submission",
    html: "<p>Name: ".concat(name, "</p>\n             <p>Email: ").concat(email, "</p>\n             <p>Message: ").concat(message, "</p>")
  };
  contactEmail.sendMail(mail, function (error) {
    if (error) {
      res.json({
        status: "ERROR"
      });
    } else {
      res.json({
        status: "Message Sent"
      });
    }
  });
});