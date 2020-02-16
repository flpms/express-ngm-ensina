'use strict';

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./exdb.db');

module.exports = userModel => (request, response, next) => {
  console.log('3 - Persistence');

  userModel(request.validData, err => {
    if (!err) return next();

    return response.status(503).send(err);
  });
};
