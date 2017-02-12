function auth(users, user){
	for (var i = 0; i < users.length; i++) {
		if (users[i].name === user){return true;}
	}
	return false;
}

module.exports = auth;