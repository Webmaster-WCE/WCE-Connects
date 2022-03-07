const mongoose = require('mongoose');

const userLoginSchema = mongoose.Schema({
  name: { type: String, required:  true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: {type: String, required: true},
  department: {type: String},
  id: { type: String }
});

const userLogin = mongoose.model("UserLogin", userLoginSchema);

module.exports =  userLogin;