var Fcalc = document.calc;
var Currents = 0;
var FlagNewNum = false;
var PendingOp = "";


// обработчик нажатия 
// цифровой кнопки
function NumPressed (Num)
{
    if (FlagNewNum)
    {
        Fcalc.ReadOut.value = Num;
        FlagNewNum = false;
    }
    else
    {
        if (Fcalc.ReadOut.value == "0")
            Fcalc.ReadOut.value = Num;
        else
            Fcalc.ReadOut.value += Num;
    }
}

// обработчик нажатия
// кнопки действия
function Operation (Op)
{
    var Readout = Fcalc.ReadOut.value;
    if (FlagNewNum && PendingOp != "=")
    {
        Fcalc.ReadOut.value = Currents;
    }
    else
    {
        FlagNewNum = true;
        if ( '+' == PendingOp )
            Currents += parseFloat(Readout);
        else if ( '-' == PendingOp )
            Currents -= parseFloat(Readout);
        else if ( '/' == PendingOp )
            Currents /= parseFloat(Readout);
        else if ( '*' == PendingOp )
            Currents *= parseFloat(Readout);
        else
            Currents = parseFloat(Readout);
        Fcalc.ReadOut.value = Currents;
        PendingOp = Op;
    }
}

// добавление десятичной точки с числу
function Decimal ()
{
    var curReadOut = Fcalc.ReadOut.value;
    if (FlagNewNum)
    {
        curReadOut = "0.";
        FlagNewNum = false;
    }
    else
    {
        if (curReadOut.indexOf(".") == -1)
            curReadOut += ".";
    }
    Fcalc.ReadOut.value = curReadOut;
}

// Очистка текущего результата
function ClearEntry ()
{
    Fcalc.ReadOut.value = "0";
    FlagNewNum = true;
}

// Полная очистка всех результатов
function Clear ()
{
    Currents = 0;
    PendingOp = "";
    ClearEntry();

}



// меняем знак текущего результата
function Neg ()
{
    Fcalc.ReadOut.value =
        parseFloat(Fcalc.ReadOut.value) * -1;
}

// вычисляем значение процентов
function Percent ()
{
    Fcalc.ReadOut.value =
        (parseFloat(Fcalc.ReadOut.value) / 100) *
        parseFloat(Currents);
};
