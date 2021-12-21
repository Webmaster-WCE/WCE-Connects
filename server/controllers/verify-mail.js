const nodemailer = require("nodemailer");
const transporter_config = require("../configurations/nodemailer");

const transporter = nodemailer.createTransport(transporter_config);

// Function to send OTP to the user. 
const sendMail = (user, token) => {
   const url = `http://localhost:5000/auth/confirmation/${token}`;
    // The mail body
    let mailBody = {
        from: '"WCE Connects" <rushishelke633@gmail.com>', // sender address
        to: user.credentials.email, // list of receivers
        subject: "OTP authentication: WCE Connects", // Subject line
        text: `Hello ${user.info.first_name}. Click on the link to verify your email account`, // plain text body
        html: `<a href="${url}">${url}</a>`
    };
    transporter.sendMail(mailBody,(err, info) => {
        if(err){
            console.log("There was error sending mail " + err);
        }else{
            console.log("Mail sent !!", + info);
        }
    });
};



module.exports = sendMail;

