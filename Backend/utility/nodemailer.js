/* ************************************************************************
 * Execution        : 1. default node  cmd> nodemon server.js              
 * @descrition      : sending email for reseting the password and login
 * @file            : nodemailer.js
 * @author          : Paresh Praveen
 * @version         : 1.0
 * @since           : 7-Oct-2021
 * 
 **************************************************************************/

/**
 * @requires nodemailer
 * @requires dotenv
 */
 var nodemailer = require("nodemailer");
 require("dotenv");
 /**
  * @description This function is used send an email when user logs in
  */
 const createEmail = () => {
   var transporter = nodemailer.createTransport({
     service: "gmail",
     auth: {
       user: process.env.EMAIL,
       pass: process.env.PASSWORD,
     },
   });
   var mailOptions = {
     from: process.env.EMAIL,
     to: "pareshpraveen99@gmail.com",
     subject: "Sending Email using Node.js for Successfull Login",
     text: "Congratulations!! You have LOGGED IN Successfully!! Enjoy Coding",
   };
   transporter.sendMail(mailOptions, function (error, info) {
     if (error) {
       console.log(error);
     } else {
       console.log("Email sent: " + info.response);
     }
   });
 };
 /**
  * @description This function sends token in email for forgot password
  * @param {string} email
  * @param {string} token
  */
 const forgotPasswordEmail = (email, token) => {
   var transporter = nodemailer.createTransport({
     service: "gmail",
     auth: {
       user: process.env.EMAIL,
       pass: process.env.PASSWORD,
     },
   });
   var mailOptions = {
     from: process.env.EMAIL,
     to: email,
     subject: "Reset Password",
     text: "Please click on the link to reset the password  Link: http://localhost:3000/reset/" + token,
   };
   transporter.sendMail(mailOptions, function (error, info) {
     if (error) {
       console.log(error);
     } else {
       console.log("Email sent: " + info.response);
     }
   });
 };
 module.exports = {
   createEmail,
   forgotPasswordEmail,
 };
 