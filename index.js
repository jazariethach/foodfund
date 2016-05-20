var express = require('express');
var mysql = require('mysql');
var app = express();

var port = process.env.PORT || 3000;

app.use('/', express.static(__dirname + '/public'));
// app.use('/', express.static(__dirname));

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodie

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',  password : 'jazariedb',
  database : 'foodfund'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

app.post('/create_event',function(req,res){
  var state = {
          title: req.body.title,
          organization: req.body.name,
          location: req.body.location,
          start_date: req.body.start,
          end_date: req.body.end,
          description: req.body.desc
        };
  var query = connection.query('INSERT INTO events SET ?', state, function(err, result) {
    if (err) {
      console.log('err: ' + err);
      throw err;
    }
  });
  console.log(query.sql); 
  res.end("done");
});

app.get('/feed', function(req, res) {
 connection.query('SELECT * FROM events', function(err, rows) {
    if (err) {
      console.log('err: ' + err);
      throw err;
    }
    res.send(rows);
  });
})


app.listen(port, function () {
	console.log('Server started: http://localhost:' + port + '/');
});

