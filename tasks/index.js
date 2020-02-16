'use strict';

const CORS = require('./1-cors');
const validationAuth = require('./2.1-auth');
const validationData = require('./2.2-data');
const persistence = require('./3-persistence');
const response = require('./4-response');

module.exports = {
  CORS,
  validationAuth,
  validationData,
  persistence,
  response
};
