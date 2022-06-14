const { Dog } = require("../models");

const dogData = [
  {
    name: "Charlie",
    breed: "Poodle",
    age: 6,
    sex: "male",
    activity: 3,
    playfulness: 3,
    socialization: 3,
    bio: "Puppy bio here. I'm so happy and cute, come play with me!",
    is_fixed: true,
    image: "Photo of Dog Here",
    // needs to be fixed
    location: 53211,
    user_id: 1,
  },
  {
    name: "Pheobe",
    breed: "Hound",
    age: 3,
    sex: "female",
    activity: 3,
    playfulness: 3,
    socialization: 3,
    bio: "lorem ipsum bio text",
    is_fixed: true,
    image: "www.google.com",
    user_id: 2,
  },
];

const seedDog = () => Dog.bulkCreate(dogData);

module.exports = seedDog;
