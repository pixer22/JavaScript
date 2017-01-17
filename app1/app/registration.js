var appStore = window.localStorage, loginsArr, userNamesArr, passArr, userSurnameArr, userAgeArr, errorClass,
    passMassage = document.getElementById('passwordMessage'),
    oldmassage = passMassage.innerHTML;
if ('login' in window.localStorage) {

} else {
    appStore.setItem("login", []);
    appStore.setItem("pass", []);
    appStore.setItem("names", []);
    appStore.setItem("surnames", []);
    appStore.setItem("ages", []);
}
window.onload = function () {
    /*Фильтр на поле password*/
    (function () {
        var inputPass = document.getElementById('password'),
            inputAge = document.getElementById('userAge');
        inputPass.addEventListener('keypress', filter, false);
        inputAge.addEventListener('keypress', filter, false);
        function filter(event) {
            var target = event.target,
                code = event.charCode || event.code;
            if (code < 32 || event.ctrlKey || event.altKey) {
                return;
            }
            var text = target.value + String.fromCharCode(code);
            var allowed = target.getAttribute('data-allowed-chars');
            var newPat = new RegExp(allowed);
            var messageId = document.getElementById(target.id + 'Message');

            if (text.search(newPat) == -1) {
                //символ недопустим
                event.preventDefault();
                if (messageId) {
                    if (target.id == 'password' && target.value.length == 10){
                        passMassage.innerHTML = 'Максимум 10 символов';
                    }
                    messageId.style.display = 'block';
                    setTimeout(function(){
                        messageId.style.display = 'none';
                        passMassage.innerHTML = oldmassage;
                    }, 2000);
                }
            } else {
                //символ допустим
                if (messageId) {
                    if (target.id == 'password' && target.value.length < 10){
                        passMassage.innerHTML = oldmassage;
                    }
                    messageId.style.display = 'none';
                }
            }
        }
    })();
    /*Фильтр на поле password END*/

    var btn = document.getElementById("login-btn");
    btn.onclick = function () {
        var login, pass, repeatPass, userName, userSurname, userAge;
        login = document.getElementById("login").value;
        console.log (login + "-----" + hex_md5(login));
        pass = document.getElementById("password").value;
        userName = document.getElementById("userName").value;
        repeatPass = document.getElementById("password-repeat").value;
        userSurname = document.getElementById("userSurname").value;
        userAge = document.getElementById("userAge").value;
        loginsArr = appStore.login.split(',');
        userNamesArr = appStore.names.split(',');
        passArr = appStore.pass.split(',');
        userSurnameArr = appStore.surnames.split(',');
        userAgeArr = appStore.ages.split(',');
        if (login.trim() !== '' && pass.trim() !== '' && userName.trim() !== '' && userAge.trim() !== '' && userSurname.trim() !== '') {
            if (pass == repeatPass){
                if (loginsArr[0] == '') {
                    addUserData('empty');
                } else {
                    var checkLogFunc = function () {
                        for (var i = 0; i < loginsArr.length; i++) {
                            console.log (i);
                            console.log (loginsArr[i]);
                            if (hex_md5(login) == loginsArr[i]) {
                                return 'copy';
                            }
                        }
                    };
                    if (checkLogFunc() == 'copy') {
                        regError('loginCopy');
                    } else {
                        loginsArr.push(hex_md5(login));
                        passArr.push(hex_md5(pass));
                        userNamesArr.push(userName);
                        userSurnameArr.push(userSurname);
                        userAgeArr.push(userAge);
                        addUserData()
                    }
                }
            } else {
                regError('passRepeat');
            }

        } else {
            regError('emptyValue');
        }
        function addUserData(firstElemValue) {
            if (firstElemValue == 'empty'){
                appStore.login = hex_md5(login);
                appStore.pass = hex_md5(pass);
                appStore.names = userName;
                appStore.ages = userAge;
                appStore.surnames = userSurname;
            } else {
                appStore.login = loginsArr;
                appStore.names = userNamesArr;
                appStore.pass = passArr;
                appStore.ages = userAgeArr;
                appStore.surnames = userSurnameArr;
            }
            window.location.assign("./login.html");
        }
    };
};

function regError(errorClass) {
    var spanErrorHtml = document.getElementById("login-error");
    switch (errorClass) {
        case 'loginCopy' :
            spanErrorHtml.innerHTML = "Такой логин уже существует!";
            break;
        case 'passRepeat' :
            spanErrorHtml.innerHTML = "Пароли не совпадают!";
            break;
            case 'emptyValue' :
            spanErrorHtml.innerHTML = "Одно из полей пустое!";
            break;
        case 'falseLogin' :
            spanErrorHtml.innerHTML = "Логин или Пароль не верны!";
            break;
        default:
            spanErrorHtml.innerHTML = "ERROR";
            break;
    }
    setTimeout(function () {
        spanErrorHtml.innerHTML = " ";
    }, 3000);
}