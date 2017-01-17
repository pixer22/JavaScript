var readButton = document.getElementById('readMode-button'),
    delay = document.getElementById('readModeSpeed-value'),
    footer = document.getElementById('site-footer'),
    footerAdress = footer.getBoundingClientRect().top,
    stopReadButton = document.getElementById('read-stop-button'),
    readError = document.getElementById('read-error');
readButton.onclick = function () {
    if (delay.value) {
        let stop = footerAdress,
            begin = 0;
        var goDown = setInterval(function () {
            begin += 50;
            if (begin <= stop) {
                scrollBy(0, 50);
            } else {
                clearInterval(goDown);
            }
        }, delay.value * 1000);
        stopReadButton.style.visibility = "visible";
    } else {
        readError.innerHTML = "Введите скорость прокрутки";
        setTimeout(function () {
            readError.innerHTML = " ";
        }, 2000);
    }
    stopReadButton.addEventListener('click', function () {
        clearInterval(goDown);
        stopReadButton.style.visibility = "hidden";
    });
};

