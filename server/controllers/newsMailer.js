const express = require('express');
const sendEmail = require('./sendMail');
const test = require('../utils/test.json');
// const mailBody = require('../utils/newsAlert.json');

const sendMail = async (req, res) => {
  try {
    // req.body = mailBody; 
    console.log(test.list1);
    console.log("req", req.newnewsBody);
    
    let dept;

    switch (req.newnewsBody.department) {
      case 'cse':
        dept = 'Department of Computer Science and Engineering'
        break;

      case 'mech':
        dept = 'Department of Mechanical Engineering'
        break;

      case 'ele':
        dept = 'Department of Electrical Engineering'
        break;

      case 'eln':
        dept = 'Department of Electronics Engineering'
        break;

      case 'civil':
        dept = 'Department of Civil Engineering'
        break;

      case 'it':
        dept = 'Department of Information Technology'
        break;
    
      default:
        dept = 'Admin - Alumni Welfare';
        break;
    }
    
    for (let i = 0; i < test.list1.length; i++) {
      // test.list1[i];
      const mailBody = {
        "Destination": {
          "ToAddresses": [test.list1[i]]
        },

        "Message": {
          "Body": {
            "Html": {
              "Charset": "UTF-8",
              "Data": ` 
              <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
              <html lang="en">

<head>
  <style type="text/css">
    body {
      margin: 0;
    }

    td,
    p {
      font-size: 13px;
      color: #1e1e1e;
    }

    ul {
      margin: 0 0 10px 25px;
      padding: 0;
    }

    li {
      margin: 0 0 3px 0;
    }

    h1,
    h2 {
      color: black;
    }

    h1 {
      font-size: 25px;
    }

    h2 {
      font-size: 20px;
    }

    a {
      color: #2F82DE;
      font-weight: bold;
      text-decoration: none;
    }

    .entire-page {
      background: #C7C7C7;
      width: 100%;
      padding: 20px 0;
      font-family: 'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif;
      line-height: 1.5;
    }

    .email-body {
      max-width: 600px;
      min-width: 320px;
      margin: 0 auto;
      background: white;
      border-collapse: collapse;

      img {
        max-width: 100%;
      }
    }

    .email-header {
      background: black;
      text-align: center;
      padding: 10px;
    }

    .news-section {
      padding: 20px 30px;
    }

    .footer {
      background: #eee;
      padding: 10px;
      font-size: 10px;
      text-align: center;
    }
  </style>
</head>

<body>
  <table class="entire-page">

    <tr>

      <td>

        <table class="email-body">

          <tr>
            <td class="email-header">
              <a href="http://alumni.wce.ac.in" target="_blank">
                <img src="https://www.alumni.wce.ac.in/assets//logo/android-chrome-192x192.png" alt="WCE Conncts News">
              </a>
              <a href="http://alumni.wce.ac.in" target="_blank">
                <h1 style="color: white;">WCE-Connects</h1>
              </a>

            </td>

          </tr>

          <tr>

            <td class="news-section">

              <h1> ${req.newnewsBody.title} </h1>

              <h2>
                Created by: ${req.newnewsBody.author}
              </h2>

            </td>

          </tr>

          <tr>

            <td class="news-section">

              <h2>About todays newsletter:</h2>

              <p> ${req.newnewsBody.description} </p>

            </td>

          </tr>

          <tr>

            <td class="news-section">

              <h2>More Details:</h2>

              <p>Here are the further details related news. </p>

              <ul>
                <li>
                  Contact Person: ${req.newnewsBody.contactPerson}
                </li>
                <li>
                  Contact Number: ${req.newnewsBody.contactNumber}
                </li>
                <li>
                  Email: ${req.newnewsBody.contactEmail}
                </li>

              </ul>

            </td>

          </tr>

          <tr>

            <td class="news-section">

              <!-- <h2> Thanks and Regards...</h2> -->

              <h4>
                Thanks and Regards,
                <br>
                ${req.newnewsBody.author},
                <br>
                Head of Department,
                <br>
                ${dept},
                <br>
                WCE, Sangli - 416415
              </h4>

            </td>

          </tr>

          <tr>
            <td class="footer">
              You're receiving this email because you are registered on <a href="http://alumni.wce.ac.in"
                target="_blank">WCE-Connects</a>.
              <br>
              Designed and developed by Department of Computer Science and Engineering, WCE Sangli (M.S.).
            </td>
          </tr>
        </table>

      </td>

    </tr>

  </table>
</body>

</html>
              `
            },
            "Text": {
              "Charset": "UTF-8",
              "Data": "All rights reserved!"
            }
          },
          "Subject": {
            "Charset": "UTF-8",
            "Data": `${req.newnewsBody.title}`
          }
        }
      }
      req.mailBody = mailBody;
      await sendEmail.emailViaAWS_SES(req, res)

    }
    res.status(201).json("Sent All Email");

  } catch (error) {
    console.log("Error: ", error);
    res.status(409)
    return res.send({ message: "Error while sending mail!" });
  }
}

module.exports = sendMail;
