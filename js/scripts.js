$(function(){

	$('.contact').on('click',function(e){
		e.preventDefault();
		$('.modal').addClass('show');
		var width = $(window).width();
		if (width < 700) {
		    $("html, body").animate({ scrollTop: 0 }, 0);
		}
	});

	$('.close, .modal-bg').on('click',function(e){
		e.preventDefault();
		$('.modal').removeClass('show');
	});

	$('form').submit(function(e) {
		// prevent standard form submission
		e.preventDefault();

		var errorcount = 0;
		
		$('input[type="text"], input[type="email"]').each(function() {
		    iValue = $(this).val();
    		if(iValue == '') {
                $(this).addClass('error');
                errorcount++;
    		}
		});
		
		if(errorcount == 0) {

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
    				$(this).html('<h2>Talk to you soon!</h2>');
    				$(this).fadeIn(500);
    			})
    			var width = $(window).width();
        		if (width < 700) {
        		    $("html, body").animate({ scrollTop: 0 }, 0);
        		}
    		});
		
		}

	});
	
	$('input[type="text"], input[type="email"]').focus(function() {
	   if ($(this).hasClass('error')) {
	       $(this).keyup(function() {
	           $(this).removeClass('error');
	       });
	   }
	});

});