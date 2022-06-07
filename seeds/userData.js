const { User } = require("../models");

const userData = [
  {
    name: "Josh",
    age: 30,
    email: "josh@josh.com",
    password: "password123",
    location: 53207
  },
  {
    name: "Andrew",
    age: 32,
    email: "andrew@andrew.com",
    password: "password123",
    location: 53151
  },
];

const seedUser = () => User.bulkCreate(userData, {
  individualHooks: true
});

module.exports = seedUser;