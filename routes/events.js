const router = require('express').Router();
const eventsCtrl = require('../controllers/events');


router.get('/events', isLoggedIn, eventsCtrl.index);
router.get('/events/new', isLoggedIn, eventsCtrl.new);
router.post('/events', isLoggedIn, eventsCtrl.create);


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
  }


module.exports = router;