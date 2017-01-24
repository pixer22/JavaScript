$(document).on("ready", function() {
	// // CSS
	// // change CSS
	// var styles = {'color'     : '#f00',
	// 			  'font-size' : '24px',
	// 			  'background': '#ccc'
	// 			 },
	//     		 
	
	// // elemsLi.css(styles);

	// // read CSS

	// // console.log(elemsLi.css("color"));

	// // text()
	// 	// getter
	// 	console.log(elemsLi.eq(0).text());
	// 	console.log("******\n");
	// 	// setter
	// 	// elemsLi.text("<p>test</p>");
	// // html()
	// 	// getter
	// 	// console.log(elemsLi.html());
	// 	// setter
	// 	// elemsLi.html("<p>test</p>");
	// 	// getter + each
	// 	elemsLi.each(function(index){
	// 		console.log(index + ":" + $(this).html());
	// 	})


	// // this
	
	

	// // $(".spoilerHead").on("click", function(){
	// // 	$(this).next().fadeToggle(500);
	// // })

	// // анимация простая
	// // show(), hide(), toggle() //display
	// // fadeIn(), fadeOut(), fadeToggle() //opacity + display
	// // slideDown(), slideUp(), slideToggle() // height + display
	// var elemLi = document.createElement('li');
	// document.getElementById('foo').appendChild(elemLi);
	// elemLi = document.createElement('li');
	// document.getElementById('foo').appendChild(elemLi);
	var ulElem = $("#foo"),
	elemsLi = ulElem.children("li");
	elemCount = elemsLi.length;

	$("#add").on('click', function(){
		ulElem.append("<li>point "+ ++elemCount + "</li>");
	})

	$('body').on('click', '#foo>li', function(){
		// $(this).css('color', '#ff0');
		ulElem.after($(this).remove());
	})
	// $("#foo>li").last().remove();

})