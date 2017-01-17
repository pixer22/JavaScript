var login, pass, btn, loginsArr, userNamesArr, passArray, userSurnameArr, userAgeArr, date = new Date(), lastDateArr = new Array(),
    attempts = 0,
    appStore = window.localStorage;
window.onload = function () {
    btn = document.getElementById("login-btn");
    loginsArr = appStore.login.split(',');
    userNamesArr = appStore.names.split(',');
    passArray = appStore.pass.split(',');
    userSurnameArr = appStore.surnames.split(',');
    userAgeArr = appStore.ages.split(',');
    if ('lastLoginsDate' in window.localStorage && appStore.lastLoginsDate) {
        lastDateArr = appStore.lastLoginsDate.split(',');
    } else {
        appStore.setItem('lastLoginsDate', []);
    }
    lastDateArr.length = loginsArr.length;
    btn.onclick = function () {
        console.info("Сработал onclick");
        login = document.getElementById("login").value;
        pass = document.getElementById("password").value;
        var accept = 0;
        for (var i = 0; i < loginsArr.length; i++) {
            if (hex_md5(login) == loginsArr[i] && hex_md5(pass) == passArray[i]) {
                appStore.setItem('CurrentUserName', userNamesArr[i]);
                appStore.setItem('CurrentUserSurname', userSurnameArr[i]);
                appStore.setItem('CurrentUserAge', userAgeArr[i]);
                appStore.setItem('UserIndex', [i]);
                if (lastDateArr[i]) {
                    appStore.setItem('CurrentUserLastLogin', lastDateArr[i]);
                } else {
                    appStore.setItem('CurrentUserLastLogin', addZero(date.getDate()) + '.' + addZero(date.getMonth()) + '.' + date.getFullYear() + 'г.' + ' ' + addZero(date.getHours()) + ':' + addZero(date.getMinutes()));
                }
                lastDateArr[i] = addZero(date.getDate()) + '.' + addZero(date.getMonth()) + '.' + date.getFullYear() + 'г.' + ' ' + addZero(date.getHours()) + ':' + addZero(date.getMinutes());
                accept = 1;
            }

        }
        if (!accept) {
            regError('falseLogin');
        } else {
            appStore.lastLoginsDate = lastDateArr;
            console.log("Вошел!");
            window.location.assign("./index.html");
        }
    };
};
/*Функция ошибки*/
function regError(errorClass) {
    attempts += 1;
    console.log("Попытка:" + attempts);
    /*если попыток больше 3х, то отправляем на регистрацию */
    if (attempts == 3) {
        window.location.assign("./registration.html");
    } else {
        var spanErrorHtml = document.getElementById("login-error");
        switch (errorClass) {
            case 'loginCopy' :
                spanErrorHtml.innerHTML = "Такой логин уже существует";
                break;
            case 'passRepeat' :
                spanErrorHtml.innerHTML = "Пароли не совпадают, или одно из полей пустое.";
                break;
            case 'falseLogin' :
                spanErrorHtml.innerHTML = "Логин или Пароль не верны.";
                break;
            default:
                spanErrorHtml.innerHTML = "ERROR";
                break;
        }
        setTimeout(function () {
            spanErrorHtml.innerHTML = " ";
        }, 3000);
    }
}
/*функция добовления нуля к дате и времени*/
function addZero(item) {
    if (item < 10) {
        item = '0' + item;
        if (item == 0) {
            item = '01';
        }
    }
    return item;
}