function run(){
	var express = require("express");
	var app = express();
	var router = require("./router");

	app.set('view engine', 'ejs');

	app.use('/', express.static(__dirname + '/../public'));

	console.log(__dirname);
	app.listen(3000, function(){
		router(app);
		console.log("listening 3000 port");
	})

}

module.exports = run;
