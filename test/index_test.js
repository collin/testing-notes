const models = require('../models');
models.Recipe;

beforeEach(() => {
  return models.Recipe.sync({ force: true });
});
