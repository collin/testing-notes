const express = require('express');
const model = require('./models');

const app = express();

function sendPromise (promiseGenerator) {
  return (request, response, next) => {
    promiseGenerator()
      .then(data => response.send(data))
      .catch(error => next)
    ;
  }
}

app.get('/recipes', sendPromise(request => model.Recipe.findAll()));
app.get('/the-cookies', sendPromise(request => model.Recipe.findTheCookies()));

module.exports = app;
