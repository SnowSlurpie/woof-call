const { Dog } = require("../models");

const dogdata = [
  {
    name: "Charlie",
    breed: "Poodle",
    age: 6,
    sex: "male",
    image: "www.google.com",
    owner_id: 1,
  },
  {
    name: "Pheobe",
    breed: "Hound",
    age: 3,
    sex: "female",
    image: "www.google.com",
    owner_id: 2,
  },
];

const seedDog = () => Dog.bulkCreate(dogData);

module.exports = seedDog;
