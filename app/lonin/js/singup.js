window.onload = function () {
    var appStore = window.localStorage;

    loginControl();

    var btn = $('reg-btn');

    btn.onclick = function () {
        console.info('Сработал клик!');
        var login,
            pass;

        login = $('reg').value;
        pass = $('reg-pass').value;

        appStore.setItem('login', login);
        appStore.setItem('pass', pass);

        loginControl();
    };

    function loginControl() {
        if (appStore.login && appStore.pass) {
            window.location.assign('./login.html');
        }
    }

    function $(str) {
        return document.getElementById(str);
    }
};