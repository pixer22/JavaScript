window.onload = function() {
    if (!window.sessionStorage.auth) {
        window.location.replace('login.html');
    }

    var user = {
        name: 'Michael Lonin',
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

    window.onscroll = function() {
        console.log('Величина прокрутки Y px', window.pageYOffset);
        console.log('Величина прокрутки X px', window.pageXOffset);
    };

    // var scrollHeight = Math.max(
    //     document.body.scrollHeight, document.documentElement.scrollHeight,
    //     document.body.offsetHeight, document.documentElement.offsetHeight,
    //     document.body.clientHeight, document.documentElement.clientHeight
    // );
    //
    // alert( 'Высота с учетом прокрутки: ' + scrollHeight );

    var menuEvents = window.document.getElementById('menu-links');
    menuEvents.onclick = function (event) {
        // console.log('Событие: ', event.target.href);
        // var number = event.target.href.lastIndexOf('#');
        // console.log('Номер элемента: ', number);
        // var str = event.target.href.slice(number+1);
        // console.log('Готово: ', str);
        var templateName = event.target.href.slice(event.target.href.lastIndexOf('#')+1);
        // elem.innerHTML = getTemplate(templateName);
    }

    // var scrollHeight = Math.max(
    //     document.body.scrollHeight, document.documentElement.scrollHeight,
    //     document.body.offsetHeight, document.documentElement.offsetHeight,
    //     document.body.clientHeight, document.documentElement.clientHeight
    // );
    //
    // alert( 'Высота с учетом прокрутки: ' + scrollHeight );
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