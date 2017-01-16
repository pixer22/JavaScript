; /* /bitrix/js/sng.up/script-up.js?14723614041026*/

; /* Start:"a:4:{s:4:"full";s:45:"/bitrix/js/sng.up/script-up.js?14723614041026";s:6:"source";s:30:"/bitrix/js/sng.up/script-up.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
window.onload = function() {
	$("body").append("<a class='scrollup' href='#'><img src='"+sng_up_button+"' alt='Вверх'></a>");
	$('.scrollup').css("bottom",sng_up_position_indent_y+'px');	//отступ снизу		
	$('.scrollup').fadeTo(0, sng_up_button_opacity/100);
	if ($(this).scrollTop() > 100) {
        $('.scrollup').fadeIn();
    } else {
        $('.scrollup').fadeOut();
		$('.scrollup').css("display",'none');	
    } 	
	if(sng_up_position=='center'){
		$('.scrollup').css("left",50+'%');				
	}else if(sng_up_position=='left'){
		$('.scrollup').css("left",sng_up_position_indent_x+'px');				
	}else if(sng_up_position=='right'){
		$('.scrollup').css("right",sng_up_position_indent_x+'px');				
	}	
    $(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        } 
    }); 
    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 500);
        return false;
    }); 	
}	  	
/* End */
;