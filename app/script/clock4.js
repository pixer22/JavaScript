function go(){
	window.timerId = window.setInterval(timer, 1000);
	document.getElementById('go').disabled = true;
			} 
			
function timer(){
	var img1 = document.getElementById('img1');
	var img2 = document.getElementById('img2');
	var img3 = document.getElementById('img3');
	var tmp = img1.src;
		
	img1.src = img2.src;
	img2.src = img3.src;
	img3.src = tmp;
				}
		