$(document).on("ready", function() {
	// CSS
	// change CSS
	var styles= 	({'color'	   : '#f00',
					  'font-size'  : '24px',
					  'background' :  '#ccc'
					});

		elemsLi = $('#foo').children("li");

	//elemsLi.css(styles);

	// read CSS

	//console.log(elemsLi.css("color"));

	// text()

		// getter
		//console.log(elemsLi.text());
		// setter
		//elemsLi.text("<p>test</p>");

	// html()
		elemsLi.each(function(index){
			console.log(index + ":" + $(this).html());
		})

	// this
	//elemsLi.on('click', function () {
	//	$(this).css('color', '#f00')
	//})
	//

//	$(".spoilerHead").on("click", function(){
//		$(this).next().fadeToggle(500);
//	})

	//$("#foo").children("ul").children("li").first(1)
})