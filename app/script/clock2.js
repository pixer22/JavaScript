//Таймер от 0 до бесконечности

			
			function go(){
				window.timerId = window.setInterval(timer, 500);
				
				document.getElementById('go').disabled = true;
				document.getElementById('stop').disabled = false;
				
			}
			
			function stop(){
				window.clearInterval(window.timerId);
				
				document.getElementById('go').disabled = false;
				document.getElementById('stop').disabled = true;
				
			}
			function timer(){
				var test = document.getElementById('test');
				
				test.innerHTML = parseInt(test.innerHTML)+1;
			}
//Таймер от 0 до бесконечности//