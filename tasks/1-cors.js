'use strict';

const CORS = (request, response, nextStep) => {
  console.log('1 - CORS');
  if (request.method !== 'OPTIONS') return nextStep();
  
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Methods', 'GET, PUT, PATCH, POST, DELETE');
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  
  return response.status(200).send();
};

module.exports = CORS;
