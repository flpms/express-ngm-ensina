'use strict';

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./exdb.db');

module.exports = ({ name, github, password }, cb) => 
  db.serialize(() => db
    .prepare('INSERT INTO users VALUES (?, ?, ? )')
    .run(name, github, password)
    .finalize(cb));
