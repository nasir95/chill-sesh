const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema ({
    eventName: {type: String, required: true},
    location: String,
    date: Date,
    description: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Event', eventSchema);