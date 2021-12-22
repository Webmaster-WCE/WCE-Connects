const auth = require("../middleware/auth"),
    router = require('express').Router(),
    { User, validateUser, validateParams}    = require('../models/user');


router.post('/auth', (req, res) => {
    let newUser = await User.findOne( { "credentials.email": req.body.email });
    if(newUser) return res.status(400).send("User already registered with this Email-ID");

    // Create user object with hashed password and store it to databaseō.
    const UserObj = {
        credentials : {
            email : req.body.email
        },
        info : {
            first_name:req.body.first_name, 
            last_name:req.body.last_name, 
            user_role: req.body.user_role, 
            current_post:req.body.current_post, 
            current_organization: req.body.current_organization
        }
    };

    try{

        newUser = new User(UserObj);
        const salt = await bcrypt.genSalt(5);
        newUser.credentials.password = await bcrypt.hash(req.body.password, salt);
        newUser = await newUser.save();
    }catch(e){ console.log(e)}

    // Async function to send mail.
    jwt.sign(
        {
            user: _.pick(newUser, 'id'),
        },
        process.env.WC_jwtPrivateKey,
        {
            expiresIn: '1d'
        },
        (error, emailToken) => {
            if(error){
                res.status(500).send({
                    message: "Failed to sign jwt token"
                });
            }
            try{
                sendMail(UserObj, emailToken);
                res.status(202).send({
                    message: "Please verify your email by clicking on the link we just mailed you"
                });
            }catch(err){
                res.status(500).send({message: "Couln't process your request"});
            }
        }
    );
});

router.get("/auth",auth(req, res), (req, res) => {
    return res.json(req.user);
});

module.exports = router;

