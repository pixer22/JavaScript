window.onload = function() {
	console.info('Авторизация');

	var btn = document.getElementById('login-btn');

	btn.onclick = function() {
		console.info('Сработал btn.onclick');

		var login,
			pass,
			appStore = window.localStorage;

		login = document.getElementById('login').value;
		pass = document.getElementById('login-pass').value;

		if(login == appStore.login && pass == appStore.pass) {
			alert('Успешно');
			window.location.replace('./index.html');
		} else {
			document.getElementById('login-error').innerHTML = 'Данные неверны';


			setTimeout(function(){
				document.getElementById('login-error').innerHTML = '';
			},2000);
		}
}
	};

