const mongoose = require('mongoose');

const newsSchema = mongoose.Schema({
    title: String,
    description: String,
    creator: String,
    contactPerson: String,
    dates: String,
    contactNumber: String,
    contactEmail: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var newsBody = mongoose.model('newsBody', newsSchema);

module.exports = newsBody;