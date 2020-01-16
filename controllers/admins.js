const User = require('../models/user');



module.exports = {
  index,
  addEvents
  
};

function index(req, res) {
  User.find({}).sort('-events').exec(function(err, users) {
    res.render('admins/index', { 
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
