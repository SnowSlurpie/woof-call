const User = require("./User");
const Dog = require("./Dog");

Dog.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasOne(Dog, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

module.exports = { User, Dog };
