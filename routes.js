'use strict';

const router = require('express').Router();

const {UserModel} = require('./model');
const {UserSchema} = require('./schemas');

const {
  validationAuth,
  validationData,
  persistence,
  response
} = require('./tasks');

router.post('/user',
  validationAuth,
  validationData(UserSchema),
  persistence(UserModel),
  response
);

module.exports = router;
