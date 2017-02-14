Занятие 33 13.02.2017 Пн
Подключали статику через Express в папке Anton_copy.

Работали с mongoose. Вот хороший ман http://coursework.vschool.io/mongoose-crud/

В папке Anton_copy/server код с прошлого занятия.

ДЗ:
1. Сделать страницу юзеров, где будут ссылки на профили в стиле href="/profile?id=$_id". То есть это надо создавать темплейт юзерз, профайл.
2. Сделать добавление аватарки пользователю.
3*. Сделать полноценный круд с юзерами. И чтоб была проверка на уникальный эмейл ещё на стадии клиента.

только модели надо в отдельную папку.
файл модели:
function run(mongoose) {
	...
	return mongoose.model('userModel', userSchema);
}
module.exports = run;
вызов:
var userModel = require("./models/users.js")(mongoose);