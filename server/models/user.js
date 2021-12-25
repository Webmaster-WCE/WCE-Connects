const mongoose    = require('mongoose');

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

// Creating mongoDB model from defined schema
const User = mongoose.model('User', userSchema);

module.exports.User = User;
