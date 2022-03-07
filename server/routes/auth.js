const router = require('express').Router(),
    {User}      = require('../models/User'),
    bcrypt      = require('bcrypt'),
    jwt         = require('jsonwebtoken');

// Configuring dotenv
require('dotenv').config();


// Login route (Temporary for just admin login)
router.post('/login', async (req, res) => {
    // Check if user with given email exists in database
    // let foundUser = await User.findOne( { "credentials.email": req.body.email });
    // Temporary solution-->
    let foundUser = (req.body.email == process.env.ADMIN_USERNAME) ? true:false;
    if(!foundUser) return res.status(400).json({
        msg: 'Invalid Email or Password',
        details: 'Email was not found in database'
    });

    // Check if the password matches
    // const validPass = await bcrypt.compare(req.body.password, foundUser.credentials.password);
    // Temporary solution-->
    let validPass = (req.body.password == process.env.ADMIN_PASSWORD) ? true:false;
    if(!validPass) return res.status(400).json({
        msg: 'Invalid Email or Password',
        details: 'Password doesnt match the given email id'
    });

    // Check if admin access is allowed : Teporarily not required
    // if(foundUser.info.user_role != 'admin') return res.status(403).json({
    //     msg: 'No access',
    //     details: 'User is not and admin'
    // });
     
    
    const token = await jwt.sign({ role: 'admin' }, process.env.jwtPrivateKey);    
    res.send(token);
});

module.exports = router;
