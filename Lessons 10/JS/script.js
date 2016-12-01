// Выбор элементов DOM
window.onload = function(){
	console.info('Главная страница');
	//по id
	//var elem = window.document.getElementById('test-id');
	//по имени
	//var elem = window.document.getElementsByName('test-name-attr');
	//то тегам
	//var elem = window.document.getElementsByTagName('img');
	// по классам
	//var elem = window.document.getElementsByClassName('inverted link');

	//по селекторам
	//var elem = window.document.querySelector('#test-id');
	//по всем селекторам
	//var elem = window.document.querySelectorAll('img[name=\'test-name-attr\']');


	// работает в console.log
	// $('img[name=\'test-name-attr\']');
	// $$('selector');

	//var elem = window.document.querySelector('#test-id').children.length;

	//innerHTML
	var elem = window.document.getElementById('test-id');
	
	elem.outerHTML = '<h4>JavaScript</h4>';


	//outerHTML
	//textContent
	

	//АТРИБУТЫ
	//var elem = window.document.querySelector('img');
	//var result = elem.setAttribute('class', 'misha');
	//var result = elem.hasAttribute('class', 'misha');
	//var result = elem.removeAttribute('class', 'misha');



console.log('elem', elem);
}