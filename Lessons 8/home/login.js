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
			
			window.location.replace('./index.html');
		} else {
			document.getElementById('login-error').innerHTML = 'Такого логина нет';
			window.location.replace('./reg.html');


			setTimeout(function(){
				document.getElementById('login-error').innerHTML = '';
			},2000);
		}


		

	// var intID = setInterval(function(){
	// 	console.info('setInterval: Прошло 3 секунды');
	// },3000);

	// setTimeout(function(){
	// 	clearInterval(intID);
	// },9100);

}	
	}
	//ТАЙМЕРЫ

	// //вызов действия единожды (секунды в 1000 = 1сек)
	// setTimeout(function(){
	// 	console.info('setTimeout: Прошло 3 секунды');
	// },3000);

	//вызов действия по интервалу с повторение через 3 сек
	// setInterval(function(){
	// 	console.info('setInterval: Прошло 3 секунды');
	// },3000);

		//WEB STORAGE//

		//LocalStorage

		//SessionStorage
