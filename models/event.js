const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: String,
  }, {
    timestamps: true
  });

const eventSchema = new Schema ({
    eventName: {type: String, required: true},
    location: String,
    date: Date,
    description: String,
    comments: [commentSchema],
    author: {
      type: Schema.Types.ObjectId, 
      ref: 'User'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Event', eventSchema)