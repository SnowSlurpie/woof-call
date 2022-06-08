const router = require('express').Router();
const { User, Dog } = require('../models')

router.get('/', (req, res) => {
        res.render('signup', {loggedIn: req.session.loggedIn})
})

module.exports = router;