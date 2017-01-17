var appStore = window.localStorage,
    upButton = document.getElementById("up-button"),
    menu = document.getElementById('main-menu'),
    body = document.getElementById('body'),
    logOutButton = document.getElementById('log-out'),
    arrayClass = document.getElementsByClassName('item-menu'),
    sesStore = window.sessionStorage;
window.onload = function () {
    var dynamicHtmlDiv = document.getElementById("dynamic-title");
    if ('nowLocation' in sesStore && sesStore.nowLocation){ // при перезагрузке страницы с активной сессией возвращаем пользователя на ту страницу где он был
        for (var i = 0; i < arrayClass.length; i++) {
            arrayClass[i].classList.remove("active");
        }
        /* Выделяем активный пункт меню */
        document.getElementById(sesStore.nowLocation).classList.add("active");
        dynamicHtmlDiv.innerHTML = getTemplate(innerTemplate, sesStore.nowLocation);

    } else {dynamicHtmlDiv.innerHTML = getTemplate(innerTemplate, 'main-template');}

    let helloNameHtml = document.getElementById('hello-name'),
        ageHtml = document.getElementById("user-age"),
        surnameHtml = document.getElementById("user-fio"),
        nameHtml = document.getElementById("user-name"),
        statusHtml = document.getElementById("user-status"),
        lastLoginHtml  = document.getElementById('lastLogin');
    if ("login" in appStore && appStore.CurrentUserName) {
        /* Если логин присутствует, приветсвуем пользователя */
        var uName = appStore.CurrentUserName,
            uSurname = appStore.CurrentUserSurname,
            uAge = appStore.CurrentUserAge,
            uLastLogin = appStore.CurrentUserLastLogin,
            uStatus = 'Online' + '<div class="status-online ui"></div>';
        helloNameHtml.innerHTML = uName;
        surnameHtml.innerHTML = '<strong> Фамилия: </strong>' + ' ' + uSurname;
        nameHtml.innerHTML = '<strong> Имя: </strong>' + ' ' + uName;
        ageHtml.innerHTML = '<strong> Возраст: </strong>' + ' ' + +uAge;
        statusHtml.innerHTML = '<strong> Статус: </strong>' + ' ' + uStatus;
        lastLoginHtml.innerHTML = '<strong>  Дата последнего логина: </strong>' + ' ' + uLastLogin;
    } else {
        /* если локал сторадж пустой, перемащаем на стр логина */
        window.location.assign("login.html");
    }

    logOutButton.addEventListener('click', function () {//Функция кнопки Log Out
        appStore.removeItem('CurrentUserName');
        window.sessionStorage.removeItem('nowLocation');
        if ('calcLog' in appStore && appStore.calcLog){
            appStore.removeItem('calcLog');
        }
        window.location.assign("login.html");
    });

    menu.onclick = function (event) { // слушаем клик в меню
        /* обнаруживаем href */
        var number = event.target.href.lastIndexOf("#"),
            menuElem = event.target.href.slice(number + 1);
        dynamicHtmlDiv.innerHTML = getTemplate(innerTemplate, menuElem);
        /* Убираем Активный класс у всех пунктов меню */
        if (menuElem != 'about-me'){
        for (var i = 0; i < arrayClass.length; i++) {
            arrayClass[i].classList.remove("active");
        }
        /* Выделяем активный пункт меню */
        event.target.classList.add("active");

            sesStore.setItem('nowLocation', menuElem);
        }
    };
/*функция подставляющая шаблон*/
    function innerTemplate (ajaxInner, templateName) {
        var ajaxElem = window.document.querySelector('#dynamic-html');
        ajaxElem.innerHTML = ajaxInner;
        $.getScript("./templates/" +  templateName + ".js");
    }
/*функция подставляющая шаблон КОНЕЦ*/

    function getTemplate(callback, templateName) { // Функция асинхронной подгрузки шаблона
        var ajax = new XMLHttpRequest();
        if (templateName != 'about-me') {
            ajax.open("GET", "./templates/" + templateName + ".html", true);
            ajax.send();
            ajax.onreadystatechange = function () {
                if (ajax.readyState == 4 && ajax.status == 200) {
                    var ajaxInner = ajax.responseText;
                    callback (ajaxInner, templateName);
                }
            };
        }

        if (event.target.innerText) { //Меняем H1 заголовок
            if(event.target.innerText == 'Контакты'){
                return dynamicHtmlDiv.innerText;
            }
            return event.target.innerText;
        } else {
            if ('nowLocation' in sesStore && sesStore.nowLocation){
                return document.getElementById(sesStore.nowLocation).innerText;
            }
            return 'Главная страница';
        }
    }
    /* Вешаем события на статус оффлайн и онлайн*/
    addEventListener('online', function () { //если онлайн
        statusHtml.innerHTML = '<strong> Статус: </strong>' + ' Online' + '<div class="status-online ui"></div>';
        if (body.classList.contains('grayscale')) {
            body.classList.remove('grayscale');
        }
        clockInner();
        nowDateInner();
    });
    addEventListener('offline', function () { //если оффлайн
        statusHtml.innerHTML = '<strong> Статус: </strong>' + ' Offline' + '<div class="status-offline ui"></div>';
        body.classList.add('grayscale');
        clockInner();
    });

};

/*Функция кнопки вверх, НАЧАЛО*/
upButton.onmouseover = function () { // добавить прозрачность
    upButton.style.opacity = 0.5;
};

upButton.onmouseout = function () { //убрать прозрачность
    upButton.style.opacity = 0.7;
};
window.onscroll = function () { // при скролле показывать и прятать блок
    if (window.pageYOffset > 0) {
        upButton.style.visibility = 'visible';
    } else {
        upButton.style.visibility = 'hidden';
    }
};

upButton.onclick = function () { // при клике скролить до верха документа
    var upButtonAdressY = window.pageYOffset || document.documentElement.scrollTop + upButton.getBoundingClientRect().top,
        stop = upButtonAdressY;
    let goUp = setInterval(function () {
        stop -= 20;
        if (stop >= 0) {
            scrollBy(0, -20);
        } else {
            clearInterval(goUp);
            scrollTo(0, 0);
            upButton.style.visibility = 'hidden';
        }
    }, 10);
};
/*Функция кнопки вверх, КОНЕЦ*/
