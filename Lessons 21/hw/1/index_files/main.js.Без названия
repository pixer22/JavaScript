$(function() {
	$('.order-select').styler();
	$('.radio').styler();

	$(".js-menu-toggle").on("click", function()
	{
		$("html").toggleClass("mobile-open");
	});


	$('input[name=street]').focus(function() {
		if($(this).val()=="Улица, переулок, проспект")
			$(this).val("");
	});
	$('input[name=street]').blur(function() {
		if($(this).val()=="") 
			$(this).val("Улица, переулок, проспект");
	});

	$('input[name=number]').focus(function() {
		if($(this).val()=="Дом")
			$(this).val("");
	});
	$('input[name=number]').blur(function() {
		if($(this).val()=="") 
			$(this).val("Дом");
	});

	$('.search_filter .filter').click(function() {
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
	});



	$('.ingridients .label').click(function() {
		//$("#scroll").css('top', '24px').slideToggle();
	});

	$('#scroll li em').click(function() {
		if ($(this).hasClass('active'))
			$(this).removeClass('active');
		else{
			$(this).siblings().removeClass('active');
			$(this).addClass('active');
		}
	});

	$('.diameter-selector li').click(function() {
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
	});


	$(document).on({
		click: function(){
			$(this).closest(".hidden_filter").hide();
		}
	},".hidden_filter i");

	$(document).on({
		click: function(){
			$(this).siblings().removeClass('active');
			$(this).addClass('active');
			$(this).find("input").prop("checked",true);
			$(this).closest('.hidden_filter').find('.sause-selector span').text($(this).data('sause'));
		}
	},".sause-selector li");

	//$('.cake-selector').selectbox();

$(document).on({
	mouseenter: function(){
		//if ($(this).closest("html").hasClass("bx-no-touch"))
		$(this).find('.hidden_filter').stop(true,true).fadeIn(100);
	},
	mouseleave : function(){
		$(this).find('.hidden_filter').stop(true,true).delay(300).fadeOut(300);
	}

},"*#products_content .products_box");

$(document).on({
	touchend: function(e){
		$(this).closest(".products_box").find('.hidden_filter').show();
	}
},".product-cell");

$(document).on({
	touchend: function(){
		$(this).find('.hidden_filter').stop(true,true).fadeIn(100);
	}
},".bx_catalog_item_container0--");



	$(document).on({
		change : function() {
			$('.js-label-dough').html($(this).val());
			
			if ($(this).data("value")==3) {
				$(".size_label").css("visibility","hidden").css("z-index","-1");
				$(".js-can-hotDog").css("visibility","visible").css("z-index","1").trigger("click");
			} else {
				$(".size_label").css("visibility","visible").css("z-index","-1");
			}
			pizzaInit();
		}
	}, '.js-dough');
	$(document).on({
		change : function() {
			size=$(this).val();
			size1=$(this).data("size1");
			if (size1!=false && size1!="undefined" && size1.length==5) size=size1;
			

			
			if (size=="x") size="25 см";
			if (size=="xl") size="30 см";
			if (size=="xxl") size="35 см";
			
			
			$('.js-label-cake').html(size);
		}
	}, '.js-cake');
	$(document).on({
		change : function() {
			$('.js-label-souch').html($(this).data('name'));
		}
	}, '.js-souch');

	$(document).on({
		click : function() {
			var $this = $(this),
				$root = $this.closest('.js-tab-nav');
			$root.find('.js-tab-item').removeClass('active');
			$this.addClass('active');

			$page = $($this.attr('href'));
			$page.closest('.js-tabs').find('.js-tabs-page').hide();
			$page.show();
			return false;
		}
	}, '.js-tab-item');

	$('.js-tabs-page').hide();
	$('.js-tab-item.active').each(function(){
		$($(this).attr('href')).show();
	});


	$('.js-composition-item').each(function(){
		var $this = $(this);
		if ($this.data('count') > 0) {
			$this.addClass('active');
			$this.find('.js-composition-item-active').val($this.data('count'));
			$this.find('.js-composition-item-deactive').val(0);
		}
		else {
			$this.find('.js-composition-item-active').val($this.data('count'));
			$this.find('.js-composition-item-deactive').val(1);
		};
	});

	$(document).on({
		click : function() {
			var $this = $(this),
				$root = $this.closest('.js-composition-item'),
				count = +($root.data('count'));
			$root.data({
				count : count+1
			});

			if ($root.is('.js-compcns')) {
				if($root.data('count') > 0) {
					$root.addClass('active').find('.js-composition-item-count').show().html(($root.data('count')));
				}
				$root.find('.js-composition-item-active').val($root.data('count'));
				$root.find('.js-composition-item-deactive').val(0); 
cnt = $root.find(".js-composition-item-count").text();
cnt = cnt*1;
if (cnt>0) {
	$root.attr("data-count",cnt);
	$root.find(".js-composition-item-active").attr("value",cnt);
	$("#"+$root.data("cid")).find("input").val(cnt);
}

calcCustomPizza();
			}
			else {

				if($root.data('count') > 0) {
					$root.addClass('active');
				}
				var tick = 1;
				if ($(this).hasClass("js-topping")) tick=0; 
				if($root.data('count') > tick) {
					$root.find('.js-composition-item-count').show().html('+' + ($root.data('count') - tick));
				}

				$root.find('.js-composition-item-active').val($root.data('count'));
				$root.find('.js-composition-item-deactive').val(0); 
cnt = $root.find(".js-composition-item-count").text();
cnt = cnt*1;
if (cnt>0) {
	$root.attr("data-count",cnt);
	$root.find(".js-composition-item-active").attr("value",cnt);
	$("#"+$root.data("cid")).find("input").val(cnt);
}

				pizzaInit(); 
			}

			// return false;
		}
	}, '.js-composition-item-inc');
	$(document).on({
		click : function() {
			var $this = $(this),
				$root = $this.closest('.js-composition-item'),
				count = +($root.data('count'));

			$root.data({
				count : ((count-1 <= 0) ? 0 : count-1)
			});

			if ($root.is('.js-compcns')) {
				if($root.data('count') < 1) {
					$root.removeClass('active');
					$root.find('.js-composition-item-deactive').val(1);
				}
				else {
					$root.find('.js-composition-item-deactive').val(0);
					$root.find('.js-composition-item-count').show().html(($root.data('count')));
				}
				$root.find('.js-composition-item-active').val($root.data('count'));
calcCustomPizza();
			}
			else {

				var tick = 1;
				if ($(this).hasClass("js-topping")) tick=0;
				if($root.data('count') < 1) {
					$root.removeClass('active');
					$root.find('.js-composition-item-deactive').val(tick);
				}
				else {
					$root.find('.js-composition-item-deactive').val(0);
				}

				if( ($root.data('count') < 2 && tick>0) || ($root.data('count') < 1 && tick==0) ) {
					$root.find('.js-composition-item-count').hide();
				}
				else { 
					$root.find('.js-composition-item-count').show().html('+' + ($root.data('count') - tick));
				}
				$root.find('.js-composition-item-active').val($root.data('count'));
				pizzaInit();
			}
			// return false;
		}
	}, '.js-composition-item-dec');

	/* constructor */
	$(document).on({
		click : function() {
			var $this = $(this),
				$gridCl = $this.closest('.js-cnstr-cl'),
				$comproot = $('.js-comproot'),
				$cnPhoto = $('.js-cnstr-photo'),
				itmObj = {};
				
			itmObj['id'] = $this.attr('id');
			itmObj['name'] = $this.find('.js-cnstr-itmname').text();
			itmObj['img'] = $this.find('.js-cnstr-itmphoto').attr('src');
			itmObj['ingredient'] = $this.data('ingimg');
			itmObj['priority'] = $this.data('priority') ? $this.data('priority') : 1;
			$gridCl.hide();

			var ingPhoto = $('<img src="' + itmObj.ingredient + '" class="cnstr-item-photo js-ingid-' + itmObj.id + '">');

			var compTpl = '<div class="grid-cl_1-4 js-comp-cl">'+
							'<div class="composition-item active js-compcns js-composition-item" data-cid="' + itmObj.id + '" data-count="1">'+
								'<input type="text" class="js-composition-item-active hide" value="1">'+
								'<input type="text" class="js-composition-item-deactive hide" value="0">'+
								'<div class="composition-count js-composition-item-count"></div>'+
								'<div class="composition-img js-composition-item-inc">'+
									'<img src="' + itmObj.img + '" style="max-width:59px" alt="">'+
								'</div>'+
								'<div class="composition-bottom">'+
									'<span class="composition-name js-composition-item-inc">' + itmObj.name + '</span> '+
									'<span class="composition-dec js-composition-item-dec"></span>'+
								'</div>'+
							'</div>'+
						'</div>';
			var compItm = $(compTpl);
			compItm.hide();
			ingPhoto.css({
				zIndex : itmObj.priority
			}).hide();
			$comproot.append(compItm);
			$cnPhoto.append(ingPhoto);
			compItm.fadeIn(300);
			ingPhoto.fadeIn(300);
			calcCustomPizza();
			return false;
		}
	}, '.js-cnstr-addit');
	$(document).on({
		click : function() {
			var $this = $(this),
				cid = $this.data('cid'),
				count = $this.data('count'),
				$compCl = $this.closest('.js-comp-cl'),
				$addit = $('#' + cid),
				$gridCl = $addit.closest('.js-cnstr-cl');

			if (!count) {
				$('.js-ingid-' + cid).remove();
				$compCl.remove();
				$gridCl.fadeIn(300);
			};
		}
	}, '.js-compcns');
	/* constructor */

	$('.js-tab-itm.active').each(function(){
		var $this = $(this),
			$page = $($this.attr('href')),
			$root = $page.closest('.js-tab-wrap');
		$root.find('.js-tab-page').hide();
		$page.show();
	});
	$(document).on({
		click : function() {
			var $this = $(this),
				$tabs = $this.closest('.js-tabs'),
				$page = $($this.attr('href')),
				$root = $page.closest('.js-tab-wrap');
			$tabs.find('.js-tab-itm').removeClass('active');
			$this.addClass('active');
			$root.find('.js-tab-page').hide();
			$page.show();
			return false;
		}
	}, '.js-tab-itm');

	
	function updateSwitchBox() {
		$('.js-switch-box').each(function(){
			var $this = $(this),
				$SwBox = $($this.data('switch'));
			if($this.is(':checked')) {
				$SwBox.show();
			}
			else {
				$SwBox.hide();
			}
		});
	}
	updateSwitchBox();
	
	$(document).on({
		change : function() {
			updateSwitchBox();
		}
	}, '.js-switch-change');
	
	$(document).on({
		click : function() {
			var popup = $('<div class="overlay"></div>'),
				cont = $($(this).attr('href')).html();

			popup.append('<div class="popmap">' + cont + '</div>');

			
			$('body').addClass('modal').append(popup);
			var o = $('.overlay')[0];
			if (o.clientWidth !== o.offsetWidth) {
				$("html").css({
					paddingRight : "17px"
				});
			};
			return false;
		}
	}, '.js-openmap');

	$(document).on({
		click: function(){
			var id = $(this).data("value");
			$(".order-select-OUTLET").val(id).change();
			$(".overlay").remove();
			$('body').removeClass('modal');
			$('html').removeAttr('style');
			return false;
		}
	},".js-outlet");

	$(document).on({
		click : function(e) {
			if (!$(e.target).closest(".popmap").length) {
				$(".overlay").remove();
				$('body').removeClass('modal');
				$('html').removeAttr('style');
			};
		}
	});	
	
	$(document).on({
		submit: function(){
			$(".js-name").keyup();
			return false;
		}
	},".js-form-sostav");
	$(document).on({
		keyup : function() {
			delay(this).enqueue(300, function() {
				var data = "ajax=1&name="+$(this).val();
				$.post("",data,function(data){
					$("#products_content").html(data);
					pizza_init();
				});
				return false;
			})
		}
		
	}, '.js-name');	
	
	$(document).on({
		submit: function(){
			url = $(this).attr('action');
			data = $(this).serialize();
			$.post(url,data,function(data){
				$(".js-basket-wrap").html(data);
				/*$(".js-toggle-wrap").slideDown();
				setTimeout('$(".js-toggle-wrap").slideUp()', 4000)*/
			});
			console.log(url)
			return false;		
		}
	},".js-list-form");
});

var delay = (function() {
    var timer = {}
      , values = {}
    return function(el) {
        var id = el.form.id + '.' + el.name
        return {
            enqueue: function(ms, cb) {
                if (values[id] == el.value) return
                //if (!el.value) return
                var original = values[id] = el.value
                clearTimeout(timer[id])
                timer[id] = setTimeout(function() {
                    if (original != el.value) return // solves race condition
                    cb.apply(el)
                }, ms)
            }
        }
    }
}())