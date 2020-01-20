const router = require('express').Router();
const eventsCtrl = require('../controllers/events');


router.get('/events', isLoggedIn, eventsCtrl.index);
router.get('/events/new', isLoggedIn, eventsCtrl.new);
router.get('/events/:id', isLoggedIn, eventsCtrl.show);
router.post('/events', isLoggedIn, eventsCtrl.create);
router.delete('/events/:id', isLoggedIn, eventsCtrl.deleteOne);  


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
  }


module.exports = router;