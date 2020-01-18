const User = require('../models/user');
const Event = require('../models/event')

module.exports = {
  index,
  show,
  delEvents
};

function index(req, res) {
  User.find({},(function(err, users) {
    res.render('users/index', { 
      users,
      user: req.user
    });
  }));
}

function show(req, res) {
  User.findById(req.params.id).populate('event').exec(function(err, user) {
    console.log(user);
    res.render('users/index', { 
      user 
    });
   });
}

function delEvents(req, res) {
  req.user.event.splice(req.params.id, 1);
    req.user.save(function(err) {
      res.redirect('/users');
    });
}

