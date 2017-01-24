"use strict"
;(function(){
	function getUserInfo(form,callback){
		$(form).on("submit", function(event){
			event.preventDefault();
			var obj = {};
			$(this).find("[type=text]").each(function(i){
				obj[$(this).attr('name')] = $(this).val();
				$(this).val('');
			})
			 callback(obj);
		})
	}

	window._ = {
		getUserInfo : getUserInfo,
	}
})()















































