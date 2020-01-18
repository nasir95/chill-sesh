const User = require('../models/user');
const Event = require('../models/event')


module.exports = {
  index,
  new: addEvents,
  create,
  show,
  deleteOne
};

function index(req, res) {
  Event.find({}).populate('events').exec(function(err, events) {
    events = events.reverse();
    // console.log(events)
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

function show(req, res) {
  Event.findById(req.params.id).populate('events').exec(function(err, event) {
    console.log(event);
    res.render('events/show', { 
       event, user: req.user 
    });
   });
  };

  function deleteOne(req, res){
    Event.findById(req.params.id).populate('events').exec(function(err, event) {
      req.event.splice(req.params.id, 1);
    req.user.save(function(err) {
      res.redirect('/events', {
         event, user: req.user
      });
     });
    })
  }
  


