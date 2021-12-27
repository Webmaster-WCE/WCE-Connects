const searchAPI = require('./../api/searchAPI');
var express = require('express');
var router = express.Router();
const User = require("../models/user");
const send = require('../controllers/sendMail');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Server is running.")
  // res.render('index', { title: 'Express' });
});

// search
router.get('/search',searchAPI.searchName);
router.get('/searchRole',searchAPI.searchRole);

//sending mails to users
router.post('/sendMail', (req, res) => {

  // console.log(req.body.user);
  send.emailViaAWS_SES(req, res);
  // let result = await emailViaAWS_SES(req, res);
  // if(result.status === 404){
  //   res.status(404).json({msg : "Email not sent!"});
  // }else{
  //   res.status(200).json({msg : "Email Sent Successfully!"});
  // }
})

module.exports = router;
