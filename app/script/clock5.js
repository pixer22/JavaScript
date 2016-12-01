var months = [
	'январь', 'февраль', 'март', 'апрель', 'май', 'июнь',
	'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'
];

var date = new Date();
var month = date.getMonth();
alert(months[month]);