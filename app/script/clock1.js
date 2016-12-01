function myclock1(){
	window.setInterval(timer, 1000);
	}
	function timer(){
		var test = document.getElementById('test');
			test.innerHTML = parseInt(test.innerHTML)+1;
					}

// отсчет от 0 до бесконечности//