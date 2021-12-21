const mongoose = require("mongoose");

const feedSchema = mongoose.Schema({
    author  : {
        type    : mongoose.Schema.Types.ObjectId,
        required: true
    },
    text    : {
        type: String,
        required: true
    },
    picture : {
        type: String
    },
    target_audience : String,
    target_branch   : String,
    comments: [{
        author  : mongoose.Schema.Types.ObjectId,
        text    : String,
        
    }]
},{timestamps: true});

module.exports.Feed = mongoose.model("Feed", feedSchema); 