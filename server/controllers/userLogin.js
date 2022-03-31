const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserLogin = require("../models/userLogin");
const sendMail = require('../controllers/sendMail');

//signin function currently working for Hod only
const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldUser = await UserLogin.findOne({ email });

    if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({
      email: oldUser.email,
      id: oldUser._id,
      role: oldUser.role,
      department: oldUser.department
    }, process.env.SECRETE, { expiresIn: "1h" });

    console.log("Login successful!");
    console.log(token);

    res.status(200).json({ result: oldUser, token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

//signup function -- currently working only for Hod
const signup = async (req, res) => {
  const { email, password, department, role, name } = req.body;

  try {
    const oldUser = await UserLogin.findOne({ email });

    if (oldUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await UserLogin.create({ email, password: hashedPassword, name, department, role });

    const token = jwt.sign({
      email: result.email,
      id: result._id,
      role: result.role, department: result.department
    }, process.env.SECRETE, { expiresIn: "1h" });

    console.log("Signup Successful!");

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });

    console.log(error);
  }
};

const forgotpassword = async (req, res) => {
  const email = req.body.email;

  try {
    const oldUser = await UserLogin.findOne({ email });

    if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });

    //create one time link for resetting
    const token = jwt.sign({
      email: oldUser.email,
      id: oldUser._id
    }, process.env.SECRETE + oldUser.password, { expiresIn: "15m" });

    const link = `${process.env.SERVER_URL}/userlogin/reset-password/${oldUser._id}/${token}`;

    // console.log("Reset link", link);

    const mailBody = {
      "Destination": {
        "ToAddresses": [oldUser.email]
      },

      "Message": {
        "Body": {
          "Html": {
            "Charset": "UTF-8",
            "Data":
              ` 
              <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
              <html lang="en">
              <head></head>
              <body>
                <p>
                  Dear User,
                  Password reset link for your account is ${link} which expires in 15 minutes. Kindly do not it with anyone, keep it confidential.                  
                </p>

                <h6>
                Thanks and regard
                <br>
                Admin,
                <br>
                WCE-Connects,
                <br>
                WCE, Sangli 416415
                </h6>
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
          "Data": `Password reset link for your account`
        }
      }
    }
    req.mailBody = mailBody;
    await sendMail.emailViaAWS_SES(req, res)

    res.send('Password link sent to you........ ')

  } catch (error) {
    res.status(500).json({ message: 'Something went wrong while creating link' });
    console.log("Error", error);
  }
}

const resetpassword = async (req, res, next) => {
  const { id, token } = req.params;

  console.log("Token", token);

  const oldUser = await UserLogin.findOne({ _id: id });

  if (!oldUser) return res.status(404).json({ message: "User doesn't exist 1" });

  const secret = process.env.SECRETE + oldUser.password;

  try {
    const payload = jwt.verify(token, secret);

    res.status(201).json({ email: oldUser.email })
  } catch (error) {
    res.status(500).json({ message: 'Token Expired!' });
    console.log("Error in reset ", error);
  }
}

const reset_password = async (req, res, next) => {
  const { id, token } = req.params;
  const { password1, password2 } = req.body;

  /*
  if(password1 !== password2)
  {
    res.status(404).json({message: 'Passwords do not match'});
  }
  */

  const oldUser = await UserLogin.findOne({ _id: id });

  if (!oldUser) return res.status(404).json({ message: "User doesn't exist 2" });

  const secret = process.env.SECRETE + oldUser.password;

  try {
    const payload = jwt.verify(token, secret);

    const hashedPassword = await bcrypt.hash(password1, 12);

    await UserLogin.findByIdAndUpdate(id, { password: hashedPassword });

    const mailBody = {
      "Destination": {
        "ToAddresses": [oldUser.email]
      },

      "Message": {
        "Body": {
          "Html": {
            "Charset": "UTF-8",
            "Data":
              ` 
              <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
              <html lang="en">
              <head></head>
              <body>
                <p>
                  Dear User,
                  Password for you WCE-Connects account has been changed successfully!
                  If you haven't done it, kind contact us at webmaster@walchandsangli.ac.in
                </p>

                <h6>
                Thanks and regard
                <br>
                Admin,
                <br>
                WCE-Connects,
                <br>
                WCE, Sangli 416415
                </h6>
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
          "Data": `Password changed successfully!`
        }
      }
    }
    req.mailBody = mailBody;
    await sendMail.emailViaAWS_SES(req, res)
    console.log("Done!!!");
  } catch (error) {
    console.log("error", error);
  }

}

module.exports = {
  signin,
  signup,
  forgotpassword,
  resetpassword,
  reset_password
}