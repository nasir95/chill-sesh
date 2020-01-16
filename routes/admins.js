const router = require('express').Router();
const adminsCtrl = require('../controllers/admins');

// GET /users
router.get('/admins', isLoggedIn, adminsCtrl.index);

// POST /users
// We will already have access to the logged in user on
// the server, therefore do not use: /users/:id/events
router.post('/events', isLoggedIn, adminsCtrl.addEvents);



function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
  }


module.exports = router;