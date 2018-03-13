const request = require('supertest');
const app = require('../../server');
const expect = require('chai').expect;
const models = require('../../models');

describe('my server', () => {
  beforeEach(() => {
    return Promise.all([
      models.Recipe.create({name: 'Cookies'}),
      models.Recipe.create({name: 'Milk'})
    ]);
  });

  describe('GET /recipes', () => {
    it('returns a list of recipes', () => {
      return request(app)
        .get('/recipes')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200)
        .then((response) => {
          expect(response.body.length).to.equal(2);
        });
    });
  });

  describe('GET /the-cookies', () => {
    it('returns only the cookies', () => {
      return request(app)
        .get('/the-cookies')
        .expect(200)
        .then((response) => {
          expect(response.body.length).to.equal(1);
          expect(response.body[0].name).to.equal('Cookies');
        });
    });
  });
});
