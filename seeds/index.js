const sequelize = require("../config/connection");
const seedDog = require("./dogData");
const seedUser = require("./userData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedDog();

  process.exit(0);
};

seedAll();
