	
		// animation hover in footer social icons
		$(function(){
			$('.twitter-icon').hover(function(){
				$(this).css('background','url(\'../img/footer/twitter-active.png\') no-repeat center center');
				
				$(this).mouseout(function(){
					$(this).css('background','url(\'../img/footer/twitter.png\') no-repeat center center');
				});
			});

			$('.facebook-icon').hover(function(){
				$(this).css('background','url(\'../img/footer/facebook-active.png\') no-repeat center center');
				
				$(this).mouseout(function(){
					$(this).css('background','url(\'../img/footer/facebook.png\') no-repeat center center');
				});
			});

			$('.linkedin-icon').hover(function(){
				$(this).css('background','url(\'../img/footer/linkedin-active.png\') no-repeat center center');
				
				$(this).mouseout(function(){
					$(this).css('background','url(\'../img/footer/linkedin.png\') no-repeat center center');
				});
			});

			$('.googleplus-icon').hover(function(){
				$(this).css('background','url(\'../img/footer/googleplus-active.png\') no-repeat center center');
				
				$(this).mouseout(function(){
					$(this).css('background','url(\'../img/footer/googleplus.png\') no-repeat center center');
				});
			});

			$('.fa-search').hover(function(){
				$('.search input[type=text]').css({'visibility':'visible','width':'250px'});
			
			});


				$('.search input[type=text]').focusout(function(){
					$(this).css({'width':'0px','visibility':'hidden'});
				});


				

			$('.dropdown').hover(function() {
		        $(this).addClass('open');
		    }, function() {
		        $(this).removeClass('open');
		    });
					    


			


});


