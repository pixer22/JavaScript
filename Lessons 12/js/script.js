var user = {
	name: 'Viktor Khapus',
	age: 32
};

var ajax = new XMLHttpRequest();
ajax.open("GET", "./templates/template.html", false);
ajax.send();

console.log('ajax', ajax);

var ajaxElem = window.document.querySelector('#ajax-test');
ajaxElem.outerHTML = eval(`\`${ajax.responseText}\``);

var elem = window.document.querySelector('#template-home');
elem.innerHTML = getTemplate('home');