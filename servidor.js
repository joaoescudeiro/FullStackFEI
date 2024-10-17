require('colors');

let http = require('http');
let express = require('express');

var app = express();

// app.use(express.static('./public'));
app.use(express.static('./public/', { index: 'home.html' }))

var server = http.createServer(app);

server.listen(80);

console.log('Servidor rodando...'.rainbow);
