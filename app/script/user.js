var user = {
    name: 'Viktor Khapus',
    age: 32
};

var ajax = new XMLHttpRequest();
ajax.open("GET", "./templates/template.html", true);
ajax.send();

console.log('ajax', ajax);

var ajaxElem = window.document.querySelector('#test');
ajaxElem.innerHTML = eval(`\`${ajax.responseText}\``);

var elem = window.document.querySelector('#test1');
elem.innerHTML = getTemplate('test');