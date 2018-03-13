const connection = require('../db');

const Recipe = connection.define('recipes', {
  name: connection.Sequelize.STRING,
  description: connection.Sequelize.STRING,
});

Recipe.findTheCookies = () => {
  return Recipe.findAll({ where: {
    name: 'Cookies',
  }});
}

module.exports = Recipe;
