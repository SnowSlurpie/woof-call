const { Dog } = require("../models");

const dogData = [
  {
    name: "Charlie",
    age: 6,
    sex: "male",
    image: "www.google.com",
    user_id: 1
  },
  {
    name: "Pheobe",
    age: 3,
    sex: "female",
    image: "www.google.com",
    user_id: 2
  },
];

const seedDog = () => Dog.bulkCreate(dogData);

module.exports = seedDog;
