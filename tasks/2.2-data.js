'use strict';

module.exports = (schema) => async (request, response, next) => {
  console.log('  2.2 - Data');

  try {
    const valid = await schema.validateAsync(request.body);
    request.validData = valid;
    return next();
  } catch(e) {
    return response.status(400).send(e);
  }
};
