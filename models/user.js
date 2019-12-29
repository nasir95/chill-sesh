const mongoose = require('mongoose');

/*
The userSchema is used to embedded docs in as student doc.
There is no model and no 'events' collection
*/
const eventSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true}
}, {
  timestamps: true
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatar: String,
  events: [eventSchema],
  googleId: String
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);