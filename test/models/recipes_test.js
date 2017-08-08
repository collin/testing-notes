const what = 88;
const connection = require('../../db');
const models = require('../../models');

describe('Recipes: Model', () => {
  beforeEach(async () => {
    await models.Recipe.create({ name: 'Raspberry Pie', description: 'Round. Delicious.' });
    await models.Recipe.create({ name: 'Crepes', description: 'Round. Delicious.' });
  });

  it('created two reciepes', async () => {
    const recipes = await models.Recipe.findAll();
    if (recipes.length != 2) {
      throw new Error('should have created two recipes!');
    }
  });
});
