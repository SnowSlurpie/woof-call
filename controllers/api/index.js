const router = require('express').Router();

const userRoutes = require('./user-routes');
const dogRoutes = require('./dog-routes')

router.use('/users', userRoutes);
router.use('/dogs', dogRoutes);

module.exports = router;
