const connection = require('../db');

const Recipe = connection.define('recipes', {
  name: connection.Sequelize.STRING,
  description: connection.Sequelize.STRING,
});

module.exports = Recipe;
