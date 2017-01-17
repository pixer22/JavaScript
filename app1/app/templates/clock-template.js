/* Часы. НАЧАЛО */
var clock,
    date = new Date(),
    timeInHtml = document.getElementById("clock"),
    dateHtml = document.getElementById('date-now');
timeInHtml.innerHTML = addImg(date.getHours()) + '<img class="twoCrap" src="./img/two-crap.png">' + addImg(date.getMinutes()) + '<img class="twoCrap" src="./img/two-crap.png">' + addImg(date.getSeconds());
clockInner();
nowDateInner();
function clockInner() { //функция запуска и остановки часов
    if (!body.classList.contains('grayscale')){ //если боди не имеет класс добовляющийся при статусе оффлайн, запускаем часы
        clock = setInterval(function () {
            var time = new Date();
            timeInHtml.innerHTML = addImg(time.getHours()) + '<img class="twoCrap" src="./img/two-crap.png">' + addImg(time.getMinutes()) + '<img class="twoCrap" src="./img/two-crap.png">' + addImg(time.getSeconds());
        }, 1000);
    } else { // или остонавливаем;
        clearInterval(clock);
    }
}



function addImg(i) { // Функция добовления вместо обычного числа, картинки.
    if (i < 10) {
        i = '<img class="numberimg" src="./img/0.png">' + '<img class="numberimg" src="./img/' + i + '.png">';
    }
    else if (i > 9 && i < 20) {
        i = '<img class="numberimg" src="./img/1.png">' + '<img class="numberimg" src="./img/' + (i - 10) + '.png">'
    }
    else if (i > 19 && i < 30) {
        i = '<img class="numberimg" src="./img/2.png">' + '<img class="numberimg" src="./img/' + (i - 20) + '.png">'
    }
    else if (i > 29 && i < 40) {
        i = '<img class="numberimg" src="./img/3.png">' + '<img class="numberimg" src="./img/' + (i - 30) + '.png">'
    }
    else if (i > 39 && i < 50) {
        i = '<img class="numberimg" src="./img/4.png">' + '<img  class="numberimg" src="./img/' + (i - 40) + '.png">'
    }
    else if (i > 49 && i < 60) {
        i = '<img class="numberimg" src="./img/5.png">' + '<img class="numberimg" src="./img/' + (i - 50) + '.png">'
    }
    return i;
}
function nowDateInner() { //вставляем текущую дату в хэдер
    dateHtml.innerHTML = '<span style="margin-right: 5px;">Дата: </span>' + ' ' + date.getDate() + ' ' +  monthToString () + ' ' + date.getFullYear() + 'г.';
}
function monthToString (){ //вместо номера, название месяца
    var month;
    switch (date.getMonth()){
        case 0:
            month = ' Января';
            break;
        case 1:
            month = ' Февраля';
            break;
        case 2:
            month = ' Марта';
            break;
        case 3:
            month = ' Апреля';
            break;
        case 4:
            month = ' Мая';
            break;
        case 5:
            month = ' Июня';
            break;
        case 6:
            month = ' Июля';
            break;
        case 7:
            month = ' Августа';
            break;
        case 8:
            month = ' Сентября';
            break;
        case 9:
            month = ' Октября';
            break;
        case 10:
            month = ' Ноября';
            break;
        case 11:
            month = ' Декабря';
            break;
        default:
            month = ' ошибка';
            break;
    }
    return month;
}
/*Часы. КОНЕЦ*/
