"use strict"
;(function (){
	var foo = 4;
	function showName(){
		console.log("Петя" + foo);
	}

	function showLogin(){
		console.log("YourLigin is"+ getLogin());
	}

	function getLogin(){
		return "Petya";
	} 

	function initSpoiler(headSpoiler){
		$(headSpoiler).on("click", function(){
			$(this).next().slideToggle();
		})
	}

	var export_my = {
		"showName" : showName,
		"showLogin" : showLogin,
		"initSpoiler" : initSpoiler,
	}

	window.$ = export_my;
})()
