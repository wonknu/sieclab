$( document ).ready(function() {


	var socket = io.connect('http://192.168.1.9:3000');
	socket.on('receive_shop', function (data) {
	    console.log('animation');
	});
	$('.btn-data').on('touchend', function() {
	    socket.emit('btn-data');
	})	
    $(".brands").on('touchend', function(e) {
    	var target = $(e.target);
    	if (!target.hasClass("")) { return null};
	    var _this = $(this).find('div');
	    $( ".brands div" ).stop().slideUp( "slow");
		setTimeout(function(){
			if(!_this.hasClass("open")) {
			    _this.stop().slideDown( "slow");
			    _this.addClass("open");
			} else {
				_this.removeClass("open");
			}
		}, 500);
		$(_this).find('.brands-promo-img').on('touchend', function() {
  			$(_this).find('.promo-text').fadeOut(2000, function() {
  				$(_this).find('.check-in-no').css('display', 'block');
  			});
  			setTimeout(function() {
  			$(_this).find('.check-in-no').on('touchend', function() {
  				$(_this).find('.check-in-no').attr('src', '/img/check-in-yes.png');
  				$(_this).find('.check-in-no').fadeOut(3000, function() {
  					$(_this).find('.final-promo-img').css('display', 'block');
  					console.log($(_this).find('.star'));
  					$(_this).parent().find('.star').attr('src', '/img/star-on.png')
  					$(_this).find('.clock-icon').css('display', 'block');
  					$(_this).find('.final-promo-text').css('display', 'inline-block');
  					$(_this).find('.brands-promo-img').addClass('complete');
  					$(_this).find('.check-in-text').addClass('complete');
  				});	
  			})
  		}, 1000);
  	})
  	});

  	/*$(".brands-promo-img").on('touchend', function() {
  		$(".promo-text").fadeOut(2000, function() {
  			$(".check-in-no").css('display', 'block');
  		});
  		setTimeout(function() {
  			$(".check-in-no").on('touchend', function() {
  				$('.check-in-no').attr('src', '/img/check-in-yes.png');
  				$('.check-in-no').fadeOut(3000, function() {
  					$('.final-promo-img').css('display', 'block');
  					$('.clock-icon').css('display', 'block');
  					$('.final-promo-text').css('display', 'inline-block');
  					$('.brands-promo-img').addClass('complete');
  					$('.check-in-text').addClass('complete');
  				});	
  			})
  		}, 1000);
  	})*/
});

