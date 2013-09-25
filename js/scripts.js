$(function(){

	$('.contact').on('click',function(e){
		e.preventDefault();
		$('.modal').addClass('show');
	});

	$('.close, .modal-bg').on('click',function(e){
		e.preventDefault();
		$('.modal').removeClass('show');
	});

	$('form').submit(function(e) {
		// prevent standard form submission
		e.preventDefault();

		// prevent multiple form submissions
		$(this).find('button').prop('disabled', 'disabled').html('Please wait...');

		var name = $('#name').val();
		var email = $('#email').val();
		var band = $('#band').val();
		var message = $('#message').val();
		var data = {
			name: name,
			email: email,
			band: band,
			message: message
		}
		$.post('/php/mail.php', data, function(response){
			// do funky stuff here, like fade out the form and show a thank you message
			$('form').fadeOut(500, function(){
				$(this).html('<h2>Thanks BRO.</h2>');
				$(this).fadeIn(500);
			})
		});
	});

});