// window.onload = function() {
//
//
// 	var btn = document.getElementById('clock12');
//
// 	btn.onclick = function() {
// 		console.info('Сработал btn.onclick');
// 		var ajax = new XMLHttpRequest();
// 		ajax.open("GET", "./templates/clock.html", false);
// 		ajax.send();
//
// 		console.log('ajax', ajax);
// 		function fclock() {
//
// }
// 		// var ajaxElem = window.document.querySelector('#clock11');
// 		// ajaxElem.innerHTML = eval(`\`${ajax.responseText}\``);
//         //
// 		//  var elem = window.document.querySelector('#clock11');
// 		//  elem.innerHTML = getTemplate('test');
// 	}
// };


window.onload = function() {

	var btn = document.getElementById('clock12');
	btn.onclick = function() {

	var elem = document.getElementById('clock11');

	setInterval(function(){

		clock = new Date();
		hours = clock.getHours();
		mins = clock.getMinutes();
		secs = clock.getSeconds();

		if (hours < 10) {hours = "0" + hours}

		if (mins < 10) {mins = "0" + mins}

		if (secs < 10) {secs = "0" + secs}

		clocktime = ( hours + ":" + mins + ":"+secs )

		elem.innerHTML = clocktime;

	},1000)
}};
