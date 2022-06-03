const router = require('express').Router();
const { User, Dog } = require('../../models');

//route to get all dogs with user(owner) data
router.get('/', (req, res) => {
    Dog.findAll({
        attributes: ['id', 'name', 'age', 'sex', 'image'],
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
        attributes: ['id', 'name', 'age', 'sex', 'image'],
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
      const dbDogData = await Dog.create({
        name: req.body.name,
        age: req.body.age,
        image: req.body.image,
        sex: req.body.sex,
        owner_id: req.body.owner_id
      });

      res.status(200).json(dbDogData);
      
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});


module.exports = router;