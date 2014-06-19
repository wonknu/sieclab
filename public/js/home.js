$( document ).ready(function() {

	setTimeout(function() {
		$('#login-home').css('display', 'none');
		$('#receive-shop-page').css('display', 'block');
		$('#list-brands-page').css('display', 'block');
	}, 6000)

	var socket = io.connect(IP + ':3000');
	socket.on('receive_shop', function (data) {
	    $('#list-brands-page').addClass('move');
	    $('#receive-shop-page').css('display', 'none');
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
});

