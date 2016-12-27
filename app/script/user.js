window.onload = function() {
    if (!window.sessionStorage.auth) {
        window.location.replace('login.html');

    }

    var user = {
        name: 'Viktor Khapus',
        age: 33
    };

    var ajax = new XMLHttpRequest();
    ajax.open("GET", "./templates/template.html", false);
    ajax.send();

    console.log('ajax', ajax);

    var ajaxElem = window.document.querySelector('#ajax-test');
    ajaxElem.outerHTML = eval(`\`${ajax.responseText}\``);



    var elem = window.document.querySelector('#template-home');
    elem.innerHTML = getTemplate('home');

  
};
// Функция для хранения шаблонов
function getTemplate(templateName) {
    if (templateName == 'home') {
        return  '<h1 class="ui header">Hello ' + window.localStorage.name + '!</h1>' +
            '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>' +
            '<p>A text container is used for the main container, which is useful for single column layouts</p>' +
            '<img class="wireframe" src="http://semantic-ui.com/examples/assets/images/wireframe/media-paragraph.png">' +
            '<img class="wireframe" src="http://semantic-ui.com/examples/assets/images/wireframe/paragraph.png">';
    } else if(templateName == 'about') {
        return  '<h1 class="ui header">This is About page</h1>' +
            '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>' +
            '<p>A text container is used for the main container, which is useful for single column layouts</p>' +
            '<img class="wireframe" src="http://semantic-ui.com/examples/assets/images/wireframe/media-paragraph.png">' +
            '<img class="wireframe" src="http://semantic-ui.com/examples/assets/images/wireframe/paragraph.png">';
    } else {
        return  '<h1 class="ui header">This template is not defined!</h1>';
    }
}