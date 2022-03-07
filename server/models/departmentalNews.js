const mongoose = require('mongoose');

const newsSchema = mongoose.Schema({
    title: {type: String, required: true},
    author: {type: String, required: true },
    description: {type: String, required: true},
    creatorRole: {type: String, required: true},
    department: {type: String},
    contactPerson: String,
    dates: String,
    contactNumber: String,
    contactEmail: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
    lastUpdated: {
        type: Date,
        default: new Date(),
    }
})

var newsBody = mongoose.model('newsBody', newsSchema);

module.exports = newsBody;