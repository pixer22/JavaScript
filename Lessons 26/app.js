var mongoose = require('mongoose');
	server = require("./server");

mongoose.connect('mongodb://localhost/blackjack');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


db.once('open', function() {
  server();
});