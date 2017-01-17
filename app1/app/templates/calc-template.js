/* СРИПТ КАЛЬКУЛЯТОР (НАЧАЛО)*/
var calcButton = document.querySelectorAll('.culcButton'),
    calcResult = document.getElementById('textInCulc'),
    appStore = window.localStorage,
    operationsLogArr = new Array(),
    lastOperations = document.getElementById('last-operations');
if ('calcLog' in appStore && appStore.calcLog){ //вставка лога операций пользователя если они есть
    operationsLogArr = appStore.calcLog.split(',');
    addOperations();
} else { //если нет, создаем переменную в локал страдже
    appStore.setItem('calcLog', []);
}
//перебираем все найденные элементы и вешаем на них события
[].forEach.call(calcButton, function (el) {
    //вешаем событие
    el.onclick = function (e) {
        /*проверяем пуста ли строка работы с калькулятором*/
        if (calcResult.innerHTML == " ") { //если пуста
            if (e.target.innerText !== "+" && e.target.innerText !== "-" && e.target.innerText !== "/" && e.target.innerText !== "*" && e.target.innerText !== "." && e.target.innerText !== "AC" && e.target.innerText !== "CE" && e.target.innerText !== "=") {
                calcResult.innerHTML += e.target.innerText;
            } else {
                calcResult.innerHTML = " ";
            }
        } else { //если не пуста
            if (e.target.innerText == "=") {
                getResult();
            } else if (e.target.innerText == "AC") {
                calcResult.innerHTML = " ";
            } else if (e.target.innerText == "CE") {
                if (calcResult.innerHTML.lastIndexOf("+") === calcResult.innerHTML.length - 2 || calcResult.innerHTML.lastIndexOf("-") === calcResult.innerHTML.length - 2 || calcResult.innerHTML.lastIndexOf("/") === calcResult.innerHTML.length - 2 || calcResult.innerHTML.lastIndexOf("*") === calcResult.innerHTML.length - 2) {
                    calcResult.innerHTML = calcResult.innerHTML.slice(0, calcResult.innerHTML.length - 3);
                } else {
                    calcResult.innerHTML = calcResult.innerHTML.slice(0, calcResult.innerHTML.length - 1);
                }
            }
            else if (e.target.innerText !== "=" && e.target.innerText !== "AC") {
                if (e.target.innerText == "+" || e.target.innerText == "-" || e.target.innerText == "/" || e.target.innerText == "*") {
                    if (calcResult.innerHTML.lastIndexOf("+") === calcResult.innerHTML.length - 2 || calcResult.innerHTML.lastIndexOf("-") === calcResult.innerHTML.length - 2 || calcResult.innerHTML.lastIndexOf("/") === calcResult.innerHTML.length - 2 || calcResult.innerHTML.lastIndexOf("*") === calcResult.innerHTML.length - 2) {
                        calcResult.innerHTML = calcResult.innerHTML.slice(0, calcResult.innerHTML.length - 2) + e.target.innerText + " ";
                    } else {
                        calcResult.innerHTML += " " + e.target.innerText + " ";
                    }

                } else if (e.target.innerText == ".") {
                    if (calcResult.innerHTML.lastIndexOf(".") === calcResult.innerHTML.length - 1) {
                        calcResult.innerHTML = calcResult.innerHTML.slice(0, calcResult.innerHTML.length - 1) + e.target.innerText;
                    }
                    else {
                        calcResult.innerHTML += e.target.innerText;
                    }
                } else {
                    calcResult.innerHTML += e.target.innerText;
                }
            }
        }
    };
});

function getResult() {//функция возвращающая результат вычеслений
    var result;
    if (calcResult.innerHTML.lastIndexOf("+") === calcResult.innerHTML.length - 2 || calcResult.innerHTML.lastIndexOf("-") === calcResult.innerHTML.length - 2 || calcResult.innerHTML.lastIndexOf("/") === calcResult.innerHTML.length - 2 || calcResult.innerHTML.lastIndexOf("*") === calcResult.innerHTML.length - 2) {
        //result = eval(calcResult.innerHTML = calcResult.innerHTML.slice(0, calcResult.innerHTML.length - 2));
        result = eval(calcResult.innerHTML);
        return calcResult.innerHTML = " " + result;
    } else if (calcResult.innerHTML == " " || calcResult.innerHTML == "Infinity") {
        calcResult.innerHTML = " ";
    }
    result = eval(calcResult.innerHTML);
    if (operationsLogArr.length == 5 && operationsLogArr) {
        operationsLogArr.splice(0, 1);
        operationsLogArr.push(calcResult.innerHTML);
    } else {
        operationsLogArr.push(calcResult.innerHTML);
    }
    addOperations();
    appStore.calcLog = operationsLogArr;
    return calcResult.innerHTML = " " + result;
}

function addOperations() { //Функция вставки последних операций
    let innerContent = '';
    for (let i = 0; i < operationsLogArr.length; i++) {
        const id = i + 1,
            operContent = operationsLogArr[i];
        innerContent += `<br><div id ='oper${id}'>${id}) ${operContent}</div>`;
    }
    lastOperations.innerHTML = innerContent;
}

/* СРИПТ КАЛЬКУЛЯТОР (КОНЕЦ)*/