var express = require('express');
var mysql = require('mysql');
var app = express();

var port = process.env.PORT || 3000;

app.use('/', express.static(__dirname + '/public'));
// app.use('/', express.static(__dirname));

var connection = mysql.createConnection({
  host     : 'localhost',
  // port 	   : 3306,
  user     : 'root',
  password : 'jazariedb',
  database : 'foodfund'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

app.listen(port, function () {
	console.log('Server started: http://localhost:' + port + '/');
});



