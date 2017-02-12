function run(auth, userDb){
	function Users(name){
		this.name = name;
	}

	Users.prototype.sayHello = function(){
		console.log(this.name + " says Hello!" );
	}

	Users.prototype.getAuth = function(){
		console.log(auth(userDb, this.name));
	}
	
	return Users;
}
module.exports = run;