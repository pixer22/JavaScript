window.onload = function() {
	console.log('Главная страница');
}

clock = new Date();
hours = clock.getHours();
mins = clock.getMinutes();
secs = clock.getSeconds();
if (hours < 10) {hours = "0" + hours }
if (mins < 10) {mins = "0" + mins }
if (secs < 10) {secs = "0" + secs }
clocktime = ( hours + ":" + mins + ":"+secs )
document.write(clocktime);
