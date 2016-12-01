window.onload = function() {
	console.info('Регистрация');
	appStore = window.localStorage;
	regRoute();
	

	var btn = $('reg-btn');

	btn.onclick = function() {
		console.info('Сработал btn.onclick');

		var login,
			pass,
			error;
			
		login = $('reg').value;
		pass = $('reg-pass').value;

		console.log(login, pass);

		appStore.setItem('login', login);
		appStore.setItem('pass', pass);

		error = regRoute();
		alert(error);

			
	}	
	function $(str){
		return document.getElementById(str);

	}
	function regRoute(){
		if(appStore.login && appStore.pass) {
		window.location.replace('./login.html');
	} else {
		return ('Ошибка ввода данных');
	}
	}
	}