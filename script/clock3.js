	function go(){
		window.timerId = window.setInterval(timer, 300);
		document.getElementById('go').disabled = true;
				}
			
	function stop(){
		window.clearInterval(window.timerId);
				
			}
	function timer(){
		var test = document.getElementById('test');
				
		var number = parseInt(test.innerHTML)-1;
		test.innerHTML = number;
		if(number == 0) {
		stop();
		var timetStop = document.getElementById('stop');
		timetStop.innerHTML = 'Завершено.';
			}
			}
		