'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const { CORS } = require('./tasks');

const routes = require('./routes.js');

const app = express();

app.port = 3000;

app.use(CORS)
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use('/v1', routes)
  .use((req, res, next) => {
    const err = new Error();
    err.message = 'Não encontrado'
    err.status = 404;
    return next(err);
  })
  .use((err, req, res) => res
    .status(err.status || 500)
    .send(err.message));

module.exports = app;
