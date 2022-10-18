const seedUser = require('./user-seed');
const seedComment = require('./comment-seed');
const seedPosting = require('./post-seed');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE -----\n');

  await seedUser();
  console.log('\n----- USER SEEDED -----\n');

  await seedComment();
  console.log('\n----- CATEGORY SEEDED -----\n');

  await seedPost();
  console.log('\n----- LISTING SEEDED -----\n');

  process.exit(0);
};

seedAll();