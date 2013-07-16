$(function(){
	
	$('.contact').on('click',function(e){
		e.preventDefault();
		$('.modal').addClass('show');
	});

	$('.close, .modal-bg').on('click',function(e){
		e.preventDefault();
		$('.modal').removeClass('show');
	});
	
});