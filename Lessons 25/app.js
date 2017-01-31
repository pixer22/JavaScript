// var Users = require("./users");
// //console.log();
// var john = new Users("john");
// john.getAuth();

var http = require("http");

http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': "text/html"});
	res.end("<h1>Hello</h1>");
}).listen(3000);
