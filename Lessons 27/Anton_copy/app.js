var server = require("./server");

var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/blackjack');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
	server();
});