'use strict';

const http = require('http');
const app = require('./app.js');

const server = http.createServer(app);

server.listen(app.port);
server.on('error', error => console.error('Server error', error.stack));

console.log(`
Server run on port ${app.port}
Started at - ${new Date(Date.now())}
`);
