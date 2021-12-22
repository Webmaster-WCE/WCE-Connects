//REGISTER ENDPOINT
const express   = require('express'),
    _           = require('lodash'),
    router      = express.Router(),
    jwt         = require('jsonwebtoken'),
    { User, validateUser, validateParams } = require('../models/user');

// Allowing the application to read jwt's in the form of json
router.use(express.json());    
// For importing jwt private key
require('dotenv').config();


//getid from token
router.get("/getid", async (req, res) => {

    const token = req.header('x-auth-token');
    if(!token) return res.status(401).send('Access Denied.No Token Provided.')
    try {
        const decoded = jwt.verify(token, process.env.WC_jwtPrivateKey);
        res.send(decoded._id);
    } catch (error) {
        res.status(400).send('Invalid Token.')
    }
});
// #### Tested: works fine
// Route to get all users: Tested, Works fine
router.get('/', async (req, res) => {
    const users = await User.find().select("info").sort('info.first_name');
    res.send(users);
});

// Route to get a current logged in user. Tested, Works fine
router.get('/current', async (req, res) => {
    const found = await User.findById(req.user._id).select("info");
    if(!found) return res.status(404).send('User not found with given ID');
    res.send(found);
});

// Route to get a user with params as id.
router.get('/:id', async (req, res) =>{
    const paramCheck = validateParams(req.params);
    if(paramCheck.error) return res.status(400).send(paramCheck.error.details[0].message);
    const found = await User.findById(req.params.id).select("info");
    if(!found) return res.status(404).send('User not found with given ID');
    res.send(found);
});

// Update user profile route.
// #### Tested: works fine for activities field.
router.put('/:id', async (req, res) =>{
    // let { error } = validateUser(req.body);
    // if(error) return res.status(400).send(error.details[0].message);

    // const paramCheck = validateParams(req.params);
    // if(paramCheck.error) return res.status(400).send(paramCheck.error.details[0].message);

    console.log(req.body.userObj);
    // new:true returns the updated document, upser:true adds the new document if it doesn't exist
    const found = await User.findByIdAndUpdate(req.params.id, req.body.userObj, {new:true});

    if(!found) return res.status(404).send('User not found with given ID');

    res.send(found);
});

// Delete user.
router.delete('/:id', async (req, res) => {
    
    const { error } = validateUser(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const found = await User.findByIdAndRemove(req.params.id);

    if(!found) return res.status(404).send('User not found with given ID');
    
    res.send(found);
});

// Get user by email.
// #Tested, works fine.
router.get('/email/:id', async (req, res) => {
    console.log(req.params.id)
    const found = await User.findOne({"credentials.email":req.params.id}).select("info activities");
    if(!found) return res.status(404).send('User not found with given email');
    res.send(found);
});

// Unnecessary and useless.
// // temp login route
// router.get("/login", async (req, res)=>{
//     res.send("you've successfully logged in");
// });

module.exports = router;

