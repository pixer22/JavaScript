var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blackjack');

var db = mongoose.connection;

db.once('open', function() {
	// console.log('dsd')
	var userSchema = new mongoose.Schema({
		fname : String,
		lname : String,
		email : {type:String, unique:true},
		passwd : String
	});

	var userModel = mongoose.model("userModel", userSchema);

	var user = new userModel({
		fname : "ivan",
		lname : "Petrov",
		email : "ivan11@gmail.com",
		passwd : "qwerty"
	});
	user.save(function() {
		console.log('saved');
	});

	userModel.find({fname: 'ivan'}, 'email passwd', function(e, data) {
		if(e) throw e;
		console.log(data);
	})

	// mongoose.disconnect();
})

