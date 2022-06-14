const router = require('express').Router();
const { User, Dog } = require('../../models');

//route to get all users
router.get('/', (req, res) => {
    User.findAll({
        attributes: {exclude: ['password']},
        include: [
            {
                model: Dog
            }
        ]
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

//route to get one user with dog data included
router.get('/:id', (req, res) => {
    User.findOne({
        attributes: {
            exclude: ['password']
        },
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Dog
            }
        ]
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({message:'No user found with this id'})
            return
        }
        res.json(dbUserData)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

//user creation route
router.post('/', async (req, res) => {

    try {
      const dbUserData = await User.create({
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
        password: req.body.password,
        location: req.body.location
      });
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.email = dbUserData.email;
        req.session.loggedIn = true;
  
        res.status(200).json(dbUserData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

// Login route
router.post('/login', async (req, res) => {
    try {
      const dbUserData = await User.findOne({
        where: {
          email: req.body.email,
        },
      });
  
      if (!dbUserData) {
        res
          .status(400)
          .json({ message: 'Invalid email address' });
        return;
      }
  
      const validPassword = await dbUserData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Invalid password' });
        return;
      }
  
      req.session.save(() => {
        req.session.user = dbUserData
        req.session.loggedIn = true
  
        res
          .status(200)
          .json({ user: dbUserData, message: 'Login successful!' });
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

//logout route
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});
  
module.exports = router;