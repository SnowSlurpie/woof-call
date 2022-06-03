const sequelize = require("../config/connection");
const seedDog = require("./dogData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedDog();

  process.exit(0);
};

seedAll();
