window.onload = function() {

	var scrollUp = document.getElementById('scrollup');

	scrollUp.onclick = function() {
		window.scrollTo(0,0);
		setInterval(10);

	};

	// scrollUp.onclick = function() {
	// 	setInterval(function(){ window.scrollTo(0,0); }, 3000);
	// }


	window.onscroll = function () {
		if ( window.pageYOffset > 500 ) {
			scrollUp.style.display = 'block';
		} else {
			scrollUp.style.display = 'none';
		}
	};
};
