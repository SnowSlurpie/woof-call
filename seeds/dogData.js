const { Dog } = require("../models");

const dogdata = [
  {
    name: "Charlie",
    age: 6,
    sex: "male",
    image: "www.google.com",
  },
  {
    name: "Pheobe",
    age: 3,
    sex: "female",
    image: "www.google.com",
  },
];

const seedDog = () => Dog.bulkCreate(dogData);

module.exports = seedDog;
