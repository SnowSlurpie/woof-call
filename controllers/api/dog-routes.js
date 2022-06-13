const router = require('express').Router();
const { User, Dog } = require('../../models');

//route to get all dogs with user(owner) data
router.get('/', (req, res) => {
    Dog.findAll({
        include: [
            {
                model: User,
                attributes: {exclude: ['password']}
            }
        ]
    })
    .then(dbDogData => res.json(dbDogData))
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

//route to get one dog with user(owner) data
router.get('/:id', (req, res) => {
    Dog.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: User,
                attributes: {exclude: ['password']}
            }
        ]
    })
    .then(dbDogData => res.json(dbDogData))
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

//dog creation route
router.post('/', async (req, res) => {
    try {
        console.log("Stage1");
      const dbDogData = await Dog.create({
        name: req.body.name,
        breed: req.body.breed,
        age: req.body.age,
        sex: req.body.sex,
        activity: req.body.activity,
        playfulness: req.body.playfulness,
        socialization: req.body.socialization,
        bio: req.body.bio,
        is_fixed: req.body.is_fixed,
        image: req.body.image,
        owner_id: req.body.owner_id
      });
console.log("Stage2")
      res.status(200).json(dbDogData);
      
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

module.exports = router;