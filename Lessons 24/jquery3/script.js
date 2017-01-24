$(document).ready(function(){
		

$("#test").on("change", function(){
	alert($(this).find("[selected]").data('price'));
})




























// data

// чтение
	// console.log($("#test").data('weight'));

// изменение
// $("#test").data("weight", '50');
// console.log($("#test").data('weight'));

// решение
// $("#test").on("click", function(){
// 	// $("#test").data("weight", '50');
// 	$("#test").attr("data-weight", '50');
// 	// console.log($("#test").attr('data-weight'));
// })


// $("#test").on("click", function(){
// 	// $("#test").data("weight", '50');
// 	$("#test").attr("data-weight", '50');
// 	// console.log($("#test").attr('data-weight'));
// })


// $("#test").on("click", function(){
// 	alert("dfgdfg");
// })































	// $("#right").on("click", 'li',function(){
	// 	$("#left").append($(this));

	// // 	// animate
	// // 	$(this).fadeOut(1000, function(){
	// // 		$(this).appendTo("#left").fadeIn(500, function(){
	// // 			$(this).animate({
	// // 				"background" : "#f00",
	// // 				"width" : "+50px",
	// // 				"border-radius" : "50%"
	// // 			}, 1500);
	// // 		});
	// // 	})

	// 	// $(this).fadeOut(250);
	// 	// $(this).appendTo("#left").fadeIn(500);
		


		
	// })
	// $("#left").on("click", 'li',function(){
	// 	// $("#right").append($(this));
	// 	var elem = $(this),
	// 		pos = Number(elem.attr("data-pos"));
	// 	$("#right").children("span").eq(pos).append(elem);
	// })
})