const router = require('express').Router();
const eventsCtrl = require('../controllers/events');


router.get('/', isLoggedIn, eventsCtrl.index);
router.get('/new', isLoggedIn, eventsCtrl.new);
router.post('/', isLoggedIn, eventsCtrl.create);
router.get('/:id', isLoggedIn, eventsCtrl.show);
router.delete('/:id', eventsCtrl.deleteOne, isLoggedIn);


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
  }


module.exports = router;