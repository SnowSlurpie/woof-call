const { Model, DataTypes, Sequelize } = require("sequelize");
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
    breed: {
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
        min: 0,
        max: 50,
      },
    },
    //   add sex option/ enum
    sex: {
      type: DataTypes.ENUM("male", "female", "inter-sex"),
      allowNull: false,
    },
    activity: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: true,
        min:1,
        max: 5
      }
    },
    playfulness: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: true,
        min:1,
        max: 5
      }
    },
    socialization: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: true,
        min:1,
        max: 5
      }
    },
    bio: {
      type: DataTypes.STRING
    },
    isFixed: {
      type: DataTypes.BOOLEAN
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true,
      },
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

module.exports = Dog;
