const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserLogin = require("../models/userLogin");

const secret = `${process.env.SECRET}`;

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
    }, secret, { expiresIn: "1h" });

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
    }, secret, { expiresIn: "1h" });

    console.log("Signup Successful!");

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });

    console.log(error);
  }
};

module.exports = {
  signin,
  signup
}