const router = require('express').Router();
const usersCtrl = require('../controllers/users');
const adminsCtrl = require('../controllers/events');

// GET /users
// router.get('/events', isLoggedIn, usersCtrl.index);

// POST /users
// We will already have access to the logged in user on
// the server, therefore do not use: /users/:id/events
// router.post('/events', isLoggedIn, adminsCtrl.addEvents);

// DELETE /users/:id
// router.delete('/events/:id', isLoggedIn, usersCtrl.delEvents);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
  }


module.exports = router;