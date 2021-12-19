const  mongoose  = require("mongoose");

const userProfileSchema = new mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId
    },
    professional_info: [ // It includes current job.
        {
            post    : String,
            organization : String,
            from    : String,
            to      : String
        }
    ],
    educational_info:[
        {
            school  : String,
            course  : String,
            score   : String,
            outof   : String,
        }
    ],
    personal_info: {
        about_me    : String,
        birthdate   : Date
    },
    contact_info: {
        mobile_no   : Number,
        alt_mobile_no: Number,
        email       : String,
        alt_email   : String,
        city        : String,
        state       : String,
        country     : String,
        pincode     : Number
    },
    profiles: {
        linkedin    : String,
        github      : String,
        twitter     : String,
        facebook    : String,
        youtube     : String,
        instagram   : String
    },
    area_of_expertise: String
});

// Creating mongoDB model from defined schema
const userProfile = mongoose.model('userProfile', userProfileSchema);

module.exports.userProfile = userProfile;