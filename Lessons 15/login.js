window.onload = function() {

	var AjaxService = ajaxService();

	var btn = window.document.getElementById('login-btn');

	btn.onclick = function() {
		var login,
			pass;

		login = document.getElementById('login').value;
		pass = document.getElementById('login-pass').value;
		
		AjaxService.getJSON(function (auth) {
			auth.status = false;
			for(var i = 0; i < auth.length; i++){
				if(login == auth[i].login && pass == auth[i].pass){
					auth.status = true;
					window.sessionStorage.setItem('auth', true);
					window.location.replace('index.html');
				}
			}
			if (!auth.status){
				document.getElementById('login-error').innerHTML = 'Неверные данные!';
				setTimeout(function(){
					document.getElementById('login-error').innerHTML = ''
				}, 3000);
			}
		});
	};
};