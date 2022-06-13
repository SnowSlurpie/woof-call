const router = require('express').Router();
const { Dog,User } = require('../models/');
// const withAuth = require('../utils/auth');
router.get('/', async (req, res) => {
    console.log("Made it this far")
  try {
    const Dog_data = await Dog.findAll({
      where: {
        user_id: 1,
      },
    });
    const dogData = Dog_data.map((dog) => dog.get({ plain: true }));
    console.log(dogData)
    res.render('profile', {
      layout: 'dashboard',
      dogData,
    });
  } catch (err) {
    console.log(err);
    res.redirect('login');
  }
});

module.exports = router;

//user_id value is working but how are we tracking the user_ids in general?? Alex hardcoded 1 and is able to display data but we need to pass a req.session value but what should we add to the end if user_id isnt working? What is the session id if it isnt user_id? req.session.(whatonearthgoeshere??)