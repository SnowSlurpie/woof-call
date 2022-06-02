const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Dog extends Model {}

Dog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true,
      },
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
        len: [2],
      },
    },
    //   add sex option
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      // don't know how to validate image because it is a string dataType, unless we want to leave it null
    },
    owner_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "dog",
  }
);

model.exports = Dog;
