'use strict';

const jwt = require('jsonwebtoken');

module.exports = (request, response, next) => {
  console.log(`2 - Validation
  2.1 - Authentication`);
  
  const { authorization } = request.headers;
  jwt.verify(authorization, '666', err => {
    if (!err) return next();

    return response.status(403).send('unauthorized');
  });
};
