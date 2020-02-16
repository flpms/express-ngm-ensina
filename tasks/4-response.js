'use strict';

module.exports = (request, response) => {
  console.log('4 - Response');
  const { name, github } = request.validData;

  response.status(202).send({
    status: 'created',
    name,
    github
  });
};
