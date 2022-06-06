const { User } = require("../models");

const userData = [
  {
    name: "Josh",
    age: 30,
    email: "josh@josh.com",
    password: "password123"
  },
  {
    name: "Andrew",
    age: 32,
    email: "andrew@andrew.com",
    password: "password123"
  },
];

const seedUser = () => User.bulkCreate(userData, {
  individualHooks: true
});

module.exports = seedUser;