const AWS = require("aws-sdk");
const config = require('config');
const bodyParser = require('body-parser');

exports.emailViaAWS_SES = function(req, res, next) {
  console.log(req.body);
  // console.log(req.body.email)
  AWS.config.update({
    accessKeyId: config.AWS.accessKeyId,
    secretAccessKey: config.AWS.secretAccessKey,
    region: config.AWS.region
  });

  const ses = new AWS.SES({ apiVersion: "2010-12-01" });

  const params = {
    Destination: {
      ToAddresses: [req.body.email] // Email address/addresses that you want to send your email
    },
    Message: {
      Body: {
        Html: {
          // HTML Format of the email
          Charset: "UTF-8",
          Data:
            `<html><body><h1>Dear ${req.body.name} ,</h1><p style='color:red'>You have been successfully registedred on <a href='http://alumni.wce.ac.in'>WCE Connects</a>. </p></body></html>`
        },
        Text: {
          Charset: "UTF-8",
          Data: "Thanks for reaching out"
        }
      },
      Subject: {
        Charset: "UTF-8",
        Data: "Registered successfully on WCE Connects."
      }
    },
    Source: "WCE-Connects" + config.AWS.SenderEmailId
  };

  const sendEmailReceiver = ses.sendEmail(params).promise();

  sendEmailReceiver
    .then(data => {
      console.log("email submitted to SES", data);
    })
    .catch(error => {
      console.log(error);
      res.status(404).send({
        message: 'Failed to send !'
      })
    });

}