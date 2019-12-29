const User = require('../models/user');

module.exports = {
  index,
  addEvents,
  delEvents
};

function index(req, res) {
  User.find({}, function(err, users) {
    res.render('users/index', { 
      users,
      user: req.user
    });
  });
}

function addEvents(req, res) {
  req.user.events.push(req.body);
    req.user.save(function(err) {
      res.redirect('/users');
    });
}

function delEvents(req, res) {
  req.user.events.splice(req.params.id, 1);
    req.user.save(function(err) {
      res.redirect('/users');
    });
}