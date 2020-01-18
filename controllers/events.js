const User = require('../models/user');
const Event = require('../models/event')


module.exports = {
  index,
  new: addEvents,
  create
};

function index(req, res) {
  Event.find({}).populate('events').exec(function(err, events) {
    res.render('events/index', { events, user: req.user });
  });
}

function addEvents(req, res) {
  res.render('events/new', { user: req.user }); 
}

function create(req, res) {

  const event = new Event(req.body);
  
  User.findById(req.user._id, function(err, user) {
    user.events.push(event._id);
    user.save(function(){
      event.save(function() {
        res.redirect('/events');
      });
    });  
  });
}