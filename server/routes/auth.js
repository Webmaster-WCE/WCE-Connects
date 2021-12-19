//LOGIN ENDPOINT  
const express   = require('express'),
    router      = express.Router(),
    bcrypt      = require('bcrypt'),
    _           = require('lodash'),
    Joi         = require('joi'),
    sendMail    = require("../controllers/verify-mail"),
    jwt         = require('jsonwebtoken'),
    { User, validateUser, validateParams}    = require('../models/user'),
    {userProfile} = require('../models/userProfile');

// Configure dotenv dependancy to use credentials securely
require('dotenv').config();
// Parse json objects.
router.use(express.json());
// #### Tested: Works fine
// Login route (short profile)
router.post('/' , async (req, res ) =>{
    
    // const { error } = validateAuth(req.body);
    // if(error) return res.status(400).send('Invalid Email or Password'); 
    
    let newUser = await User.findOne( { "credentials.email": req.body.email });
    if(!newUser) return res.status(400).send('Invalid Email or Password');
    if(!newUser.credentials.confirmed) return res.status(400).send('Please Verify Your Email');

    const validPass = await bcrypt.compare(req.body.password || req.body.email, newUser.credentials.password);
    if(!validPass) return res.status(400).send('Invalid Email or Password'); 
    
    const token = newUser.genAuthToken();    
    res.send(token);
});
// 
// User register route.
router.post('/register' , async (req, res ) => {
    // Check for valid user schema.
    // const { error } = validateUser(req.body);
    // if(error) return res.status(400).send(error.details[0].message); 
    
    // Check for existing email.
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
        },
        activities : {
            spoc                    : req.body.spoc,
            talks_and_meets         : req.body.talks_and_meets,
            employability_assesment : req.body.employability_assesment,
            mentorship              : req.body.mentorship,
            portal_for_career_opportunities: req.body.portal_for_career_opportunities,
            curriculum_revamping    : req.body.curriculum_revamping,
            faculty_alumni_workshops: req.body.faculty_alumni_workshops,
            annual_alumni_meet      : req.body.annual_alumni_meet,
            sponsored_projects      : req.body.sponsored_projects,
            awards                  : req.body.awards,
            modernization_of_labs   : req.body.modernization_of_labs,
            industrial_visits       : req.body.industrial_visits,
            internships             : req.body.internships,
            testing_and_consultancy : req.body.testing_and_consultancy,
            involvement_in_evolution_process: req.body.involvement_in_evolution_process,
            icc                     : req.body.icc,
            industry_institute_interaction: req.body.industry_institute_interaction,
            soft_skill_training     : req.body.soft_skill_training,
            member_academic_board   : req.body.member_academic_board,
            helping_student_activities: req.body.helping_student_activities,
            felicitations_of_distinguished_alumni: req.body.felicitations_of_distinguished_alumni
        }
    };

    try{

        newUser = new User(UserObj);
        const salt = await bcrypt.genSalt(5);
        newUser.credentials.password = await bcrypt.hash(req.body.password || req.body.email, salt);
        newUser = await newUser.save();

        // Create User Profile.
        const userProfileObj = {
            user_id: newUser._id,
            professional_info: [
                {
                    post : req.body.current_post,
                    organization : req.body.current_organization,
                    start_date : new Date(),
                    end_date : new Date()
                }
            ],
            educational_info:[],
            personal_info: {
                about_me    : null,
                birthdate   : null
            },
            contact_info: {
                mobile_no   : req.body.mobile_no,
                alt_mobile_no: req.body.alt_mobile_no || null,
                email       : req.body.email,
                alt_email   : req.body.alt_email || null,
                address     : req.body.address || null,
                city        : req.body.city || null,
                state       : req.body.state || null,
                country     : req.body.country || null,
                pincode     : req.body.pincode || null
            },
            profiles: {
                linkedin    : null,
                github      : null,
                twitter     : null,
                facebook    : null,
                youtube     : null,
                instagram   : null
            },
            area_of_expertise: req.body.area_of_expertise
        };

        try{
            const newUserProfile = new userProfile(userProfileObj);
            await newUserProfile.save();
        }catch(err){console.log("User created successfully. Error while creating profile" + err);}
    }catch(e){ console.log("Error while creating user " + e);}

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
    
    // Generate auth token and send. // Instead send confimation mail and respond user to notify that
    // const token = newUser.genAuthToken();
    // res.header('x-auth-token', token).send(_.pick(newUser, ['_id', 'first_name','last_name', 'email']));
});
// #### Tested: works fine
// Email verification route.
router.get('/confirmation/:token', async (req, res)=>{
    try{
        const {user:{id}} = jwt.verify(req.params.token, process.env.WC_jwtPrivateKey);
        await User.updateOne({_id:id}, {$set:{"credentials.confirmed": true}});
        res.header('x-auth-token', req.params.token);
        res.status(201).redirect("http://127.0.0.1:3000/verified");

        //After Email Confirmation make empty userProfile with id
        // {
        //     "user_id": "",
        //     "prefessional_info":[],
        //     "educational_info":[],
        //     "personal_info":{
        //         "about_me":"",
        //         "birthdate":""
        //     },
        //     "contact_info":{
        //         "mobile_no":"",
        //         "email":""
        //     },
        //     "profiles":{
        //         "linkedin":"",
        //         "github":"",
        //         "twitter":"",
        //         "youtube":"",
        //         "facebook":"",
        //         "instagram":""
        //     }
        // }

    } catch(error){
        res.status(500).send({message: error});
    }
});

// Validate user attribute limits
// function validateAuth(req){

//     const schema = Joi.object({
//         email : Joi.string().min(10).max(255).required().email(),
//         password : Joi.string().min(8).max(1024).required()
//     });
//     return schema.validate(req);
// }

module.exports = router;