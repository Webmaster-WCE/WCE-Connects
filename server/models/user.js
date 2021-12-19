const Joi       = require('joi'),
    mongoose    = require('mongoose'),
    jwt         = require('jsonwebtoken');

// Configure dotenv dependancy to access credentials and private keys 
require('dotenv').config();

// I don't know what it does
Joi.objectId = require('joi-objectid')(Joi);

// Schema for the short profile of user
const userSchema = new mongoose.Schema({
    credentials: {
        email:{
            type: String,
            unique:true,
            // required: true,
            minlength:10,
            maxlength:255
        },
        confirmed:{
            type: Boolean,
            default: false
        },
        password:{
            type: String,
            // required: true,
            minlength:8,
            maxlength:1024
        },
    },
    info :{
        first_name:{
            type: String,
            // required: true,
            minlength:3,
            maxlength:100
        },
        last_name:{
            type: String,
            // required: true,
            minlength:3,
            maxlength:100
        },
        user_role:{
            type: String,
            // enum: ['student', 'teacher', 'alumni'],
            // required: true
        },
        current_post: { // It includes the array element of professional info from userProfile.
            type: String,
            // required: true,
            minlength:1,
            maxlength:100
        },
        current_organization: {
            type: String,
            // required: true,
            minlength:1,
            maxlength:100
        },
    },
    activities :{
        spoc: {
            type: Boolean,
            default: false},
        talks_and_meets: {
            type: Boolean,
            default: false},
        employability_assistance: {
            type: Boolean,
            default: false},
        mentorship: {
            type: Boolean,
            default: false},
        portal: {
            type: Boolean,
            default: false},
        curriculum_revamping: {
            type: Boolean,
            default: false},
        faculty_alumni_workshops: {
            type: Boolean,
            default: false},
        annual_alumni_meet: {
            type: Boolean,
            default: false},
        sponsored_projects: {
            type: Boolean,
            default: false},
        awards: {
            type: Boolean,
            default: false},
        modernization_of_labs: {
            type: Boolean,
            default: false},
        industrial_visits: {
            type: Boolean,
            default: false},
        internships: {
            type: Boolean,
            default: false},
        testing_and_consultancy: {
            type: Boolean,
            default: false},
        involvement_in_evaluation_process: {
            type: Boolean,
            default: false},
        icc: {
            type: Boolean,
            default: false},
        industry_institute_interaction: {
            type: Boolean,
            default: false},
        soft_skills_training: {
            type: Boolean,
            default: false},
        bos: {
            type: Boolean,
            default: false},
        helping_student_activities: {
            type: Boolean,
            default: false},
        felicitation_of_distinguished_alumni: {
            type: Boolean,
            default: false},
        member_academic_board: {
            type: Boolean,  
            default: false},
        description: {
            type: String
        }
    }
});

// Method to get jwt token (From objectID and jwt private key)
// userSchema.methods.genAuthToken = function () {
//     return jwt.sign({ _id: this._id }, process.env.WC_jwtPrivateKey);
// };

// Creating mongoDB model from defined schema
const User = mongoose.model('User', userSchema);

// Joi validation
// function validateUser(newUser){
//     const schema = Joi.object({
//         credentials : {
//             email : Joi.string().min(10).max(255).required().email(),
//             password : Joi.string().min(4).max(1024).required(),
//         },
//         info : {
//             first_name : Joi.string().min(3).max(100).required(),
//             last_name : Joi.string().min(3).max(100).required(),
//             user_role : Joi.string().required()
//         } 
//     });
//     return schema.validate(newUser);
// }

// Joi validation
// function validateParams(params)
// {
//     const schema = Joi.object({
//         id : Joi.objectId()
//     });
//     return schema.validate(params);
// }

module.exports.User = User;
// module.exports.validateUser = validateUser;
// module.exports.validateParams = validateParams;