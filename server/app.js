const express   = require('express'),
    app         = express(),
    bodyParser = require('body-parser')
    mongoose    = require('mongoose'),    
    bcrypt      = require('bcrypt'),
    cors        = require('cors'),
    auth        = require('./middleware/jwt-auth'),
    {User}      = require('./models/User'),
    {userProfile} = require('./models/userProfile'),
    authRoutes  = require('./routes/auth'),
    adminRoutes = require('./routes/admin');


//Departmental news section
const departmentalNews = require('./routes/departmentalNews');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Route for departmental news
app.use('/news', departmentalNews);


// Using environment variables (Config) for AWS SES Credentials...
require('dotenv').config();


// ## To be moved to middlewares
const corsOptions = {
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
};
app.use(cors(corsOptions));
app.use(express.json());

// Quick fix for: No 'Access-Control-Allow-Origin' header is present on the requested resource error
//## To be moved to middlewares
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'https://www.alumni.wce.ac.in');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});



// ## To be moved to controllers
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_CONN, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected!!');
    } catch (err) {
        console.log('Failed to connect to MongoDB', err);
        process.exit(1);
    }
};

connectDB();

// Route to register a new user
// ## To be moved to routes/user.js
app.post('/register' , async (req, res ) => { 
    // Check for existing email.
    let newUser = await User.findOne( { "credentials.email": req.body.email });
    if(newUser) return res.status(400).send("Form already filled with this Email-ID");

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
            felicitations_of_distinguished_alumni: req.body.felicitations_of_distinguished_alumni,
            description             : req.body.idea_description
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
            res.status(200).send("Registration Successful");
        }catch(err){res.status(500).send("User created successfully. Error while creating profile" + err);}
    }catch(e){ res.status(500).send("Error while creating user " + e);}
});

// ## To be moved to routes/index.js
app.get('/', function (req, res) {
  res.send('Hello World');
});

// Importing routing modules
// Without authentication
app.use('/auth', authRoutes);   
 
// With authentication
app.use(auth);
app.use('/admin', adminRoutes);

app.listen(3000);