var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.once('open', function(){

	var userModel = require("./models/user");

	var user = new userModel({
							email  : "john@gmail.com",
							passwd : "123"
						});

	user.save(function(err){
		if(err) return console.error(err);
	});

	userModel.find(function(err, answer){
		console.log(answer);
	});

});
