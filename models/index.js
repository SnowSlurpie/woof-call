const User = require("./User");
const Dog = require("./Dog");

Dog.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Dog };
