const mongoose = require('mongoose');


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