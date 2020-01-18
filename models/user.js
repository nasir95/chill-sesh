const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  avatar: String,
  events: [{type: Schema.Types.ObjectId, ref: 'Event'}],
  googleId: String
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);