
var express = require('express');
var app = new express();

var parser = require('body-parser');

// link to DB
require('./database.js');

app.use(express.static(__dirname + '/../.tmp'));
app.use(express.static(__dirname + '/imgs'));

app.use(parser.json());
app.use(parser.urlencoded({extended:false}));


var port = process.argv[2] || 3000;
app.listen(port);
console.log("server is listening on port " + port);

// manage API routes (set, get, update)
require('./routes.js')(app);