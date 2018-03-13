const what = 88;
const connection = require('../../db');
const models = require('../../models');
const expect = require('chai').expect;

describe('Recipes: Model', () => {
  beforeEach(() => {
    return Promise.all([
      models.Recipe.create({name: 'Cookies'}),
      models.Recipe.create({name: 'Milk'})
    ]);
  });

  it('finds the cookies', () => {
    return models.Recipe.findTheCookies()
    .then((recipes) => {
      expect(recipes[0].name).to.equal('Cookies');
    })
  });
});
