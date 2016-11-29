window.onload = function() { // после загрузки страницы

	var read = document.getElementById('read'); // найти элемент

	

	read.onclick = function() { //обработка клика
		setInterval(function() {scrollBy(0,2)}, 500);
	};


};

