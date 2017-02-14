// запускать это всё дело можно supervisor server
var express = require('express');

var app = express();

app.set('view engine', 'ejs'); // 

app.get('/', function(req, res) {
	res
		.render("template", {
			page:"main",
			aniss: "sdfasd"
		})
})

app.get('/about', function(req, res) {
	res
		.render("template", {
			page:"about"
		})
})

app.get('/profile', function(req, res) {
	res
		.type('text/html')
		.send('<h1>Profile</h1>');
})

app.get('/game', function(req, res) {
	res
		.type('text/html')
		.send('<h1>Game</h1>');
})

// 404
app.use(function(req, res) {
	res
		.status(404)
		.render("template", {
			page:"404"
		})
		
})

// 505
app.use(function(err, req, res, next) {
	res.type('text/html');
	res.status(500);
	res.send('<h1>500 - Server error</h1>');
})

app.listen(3000, function() {
	console.log('listening on localhost:3000')
})