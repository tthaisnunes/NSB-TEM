$('.item-submenu').click(function(){
	var target = $(this).parent().attr('id');
	var ul = $('ul').find("[data-target="+ target +"]").toggle();
	$(this).toggleClass('close-item');
});
