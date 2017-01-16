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
		//elemsLi.each(function(index){
		//	console.log(index + ":" + $(this).html());
		//})

	// this
	//elemsLi.on('click', function () {
	//	$(this).css('color', '#f00')
	//})
	//

//	$(".spoilerHead").on("click", function(){
//		$(this).next().fadeToggle(500);
//	})

	//$("#foo").children("ul").children("li").first(1)
// 	var elemCount = $("#foo").children('li').length;
// 	$("#add").click(function(){
// 	//$("#foo").after("<li>Пункт</li>")
// 	$("<li>point</li>").appendTo($("#foo"));
// });

	var ulElem = $("#foo"),
	elemCount = ulElem.children('li').length;
	$("#add").on('click', function(){
		ulElem.append("<li>point "+ ++elemCount + "</li>");
	})

	//var elemLi = document.createElement('li');
	//document.getElementById('foo').appendChild(elemLi);

	//bind() // привязать событие
	//unbind() // отвязывать событие


	ulElem.on('click', 'li', function(){
		//$(this).css('color', '#ff0');
		$(this).remove();
	})



})