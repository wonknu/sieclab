var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(bodyParser());
app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/view');
app.set('view engine', 'jade');

app.get('/index/:name', function(req, res){
  res.render('index', {name: req.params.name});
});

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('test', function (data) {
    console.log(data);
  });
});

app.listen(3000);