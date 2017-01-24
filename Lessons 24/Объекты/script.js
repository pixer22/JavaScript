"use strict"
function User(login, passwd, email){
	this.login = login;
	this.passwd = passwd;
	this.email = email;
	this.showInfo = function(){
		return "<p>"+this.login+"</p><p>"+this.passwd+"</p><p>"+this.email+"</p>";
	}
}

var users = [];

$(document).on('ready', function(){

	_.getUserInfo("#getUserInfo", function(info_my){
		users.push( new User(info_my["login"], info_my["passwd"], info_my["email"]) );

	});

})



















// var obj = {
// 	key : "hello",
// 	showKey : function(){
// 		console.log(this.key);
// 	}
// }


// obj.showKey();

// function t(){
// 	t.foo++;
// 	console.log(t.foo);
// }

// t.foo = 1;


// t();
// t();
// t();
// t();
// t();
// t();


































// $(document).on('ready', function(){
// 	_.getUserInfo("#getUserInfo", function(info_my){
// 		var elemCont = $("#container");
// 		for(key in info_my){
// 			elemCont.append("<h2>" + info_my[key] + "</h2>");
// 		}
// 	});
// })