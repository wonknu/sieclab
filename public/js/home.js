$( document ).ready(function() {
    $(".brands").click(function() {
    var _this = $(this).find('p');
    console.log(_this);
    $( ".brands p" ).slideUp( "slow");
	setTimeout(function(){
		_this.slideDown( "slow");
	}, 500);
  });
});

