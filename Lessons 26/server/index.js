function run(){

var express = require("express");
var app = express();
router = require("./router");

app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/../public"));



app.listen(3000, function(){
	router(app);
	console.log("Server listennig 3000 port");
});
};

module.exports = run;