const router = require('express').Router();
const { User, Dog } = require('../models')

router.get('/', (req, res) => {
        if (req.session.loggedIn) {
                console.log(req.session.loggedIn)
                res.render('profile', {layout:'dashboard', loggedIn: req.session.loggedIn})
        } else {
                res.render('signup')
        }
})

router.get('/login', (req, res) => {
        if (req.session.loggedIn) {
          res.redirect('/');
          return;
        }
      
        res.render('login');
});


module.exports = router;