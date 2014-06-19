var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var users = [];
var IP = require('./public/js/config');

server.listen(3000);

app.use(bodyParser());
app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/view');
app.set('view engine', 'jade');

app.get('/home/:name', function(req, res){
  res.render('home', {name: req.params.name, ip: IP});
});

app.get('/index/:name', function(req, res){
  res.render('index', {name: req.params.name, ip: IP});
});

io.on('connection', function (socket) {
  console.log('connection');
  socket.on('btn-data', function (data) {
  	console.log('btn-data');
  	io.sockets.emit('get_data');
  });
  socket.on('send_shop', function (data) {
  	socket.broadcast.emit('receive_shop');
  });
  socket.on('disconnect', function () {
    io.sockets.emit('user disconnected');
  });
});

