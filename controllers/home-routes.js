const router = require('express').Router();
const { User, Dog } = require('../models')

router.get('/', (req, res) => {
        if (req.session.loggedIn) {
                console.log(req.session.loggedIn)
                res.render('dashboard', {loggedIn: req.session.loggedIn})
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

router.get('/dashboard', (req,res) => {
        if (req.session.loggedIn) {
                res.render('dashboard');
        } else {
                res.redirect('/');
        }
})

module.exports = router;