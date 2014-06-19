$( document ).ready(function() {


	var socket = io.connect('http://192.168.1.9:3000');
	socket.on('receive_shop', function (data) {
	    console.log('animation');
	});
	$('.btn-data').on('touchend', function() {
	    socket.emit('btn-data');
	})	
    $(".brands").on('touchend', function(e) {
    	console.log('Here');
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
  	});

  	$(".brands-promo-img").on('touchend', function() {
  		$(".promo-text").fadeOut(2000, function() {
  			$(".check-in-no").css('display', 'block');
  		});
  		setTimeout(function() {
  			$(".check-in-no").on('touchend', function() {
  				$('.check-in-no').attr('src', '/img/check-in-yes.png');
  				$('.check-in-no').fadeOut(3000);
  			})
  		})
  	})
});

