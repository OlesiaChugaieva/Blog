const { User } = require('../models');

const userData = [
  {
    username: 'Test',
    password: 'Test123',
  },
  {
    username: 'JoeCampbell',
    password: 'PassWord123',
  },
  {
    username: 'JimHendrix',
    password: 'Music1',
  },
  {
    username: 'Cinemalover',
    password: 'Hello',
  },
];

const seedUser = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUser;