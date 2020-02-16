const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./exdb.db');

db.serialize(() => db.run("CREATE TABLE users (name TEXT, github TEXT, password TEXT)"));