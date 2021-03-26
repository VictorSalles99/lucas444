require('dotenv/config');

module.exports = {
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: 'root',
  database: 'testeedesoft',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
