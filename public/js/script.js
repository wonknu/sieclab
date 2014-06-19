var App = {

	preload: function ()
	{
		var preload = new createjs.LoadQueue(true, '/img/');
		var manifest = [
		    {src: 'bg-brands-list.png'},
		    {src: 'bg-brands-promo.png'},
		    {src: 'bg-login-phone.png'},
		    {src: 'bg-phone.png'},
		    {src: 'bg-shop.jpg'},
		    {src: 'bg.jpg'},
		    {src: 'celio.png'},
		    {src: 'check-in-no.png'},
		    {src: 'check-in-yes.png'},
		    {src: 'clock-icon.png'},
		    {src: 'footer-list.png'},
		    {src: 'footer-map.png'},
		    {src: 'hm.png'},
		    {src: 'kookai.png'},
		    {src: 'lecoq.png'},
		    {src: 'lifewear.png'},
		    {src: 'phone.png'},
		    {src: 'portrait-login.png'},
		    {src: 'sprite-icon.jpg'},
		    {src: 'star-off.png'},
		    {src: 'star-on.png'},
		    {src: 'star.png'},
		    {src: 'swatch.png'},
		    {src: 'thomassabo.png'},
		    {src: 'zara.png'},
		    {src: 'shop/shop-1.jpg'},
		    {src: 'shop/shop-2.jpg'},
		    {src: 'shop/shop-3.jpg'},
		    {src: 'shop/shop-4.jpg'},
		    {src: 'shop/shop-5.jpg'},
		    {src: 'shop/shop-6.jpg'},
		    {src: 'shop/shop-7.jpg'},
		    {src: 'shop/shop-8.jpg'},
		    {src: 'shop/shop-9.jpg'},
		];
		preload.addEventListener('complete', function()
		{
			App.init();
		});
		preload.loadManifest(manifest);
	},

	init: function ()
	{
		var title = document.getElementById('title');
		var wrapperLife = document.getElementById('wrapper-life');

		$('#refresh').on('touchend', function()
		{
			window.location.reload();
		});

		setTimeout(function()
		{
			title.classList.add('up');
			wrapperLife.style.display = 'block';
			title.classList.add('fade');

			setTimeout(function()
			{
				title.querySelector('span').innerHTML = "Sélectionnez votre instant de vie";
				title.classList.remove('fade');
				setTimeout(function()
				{
					document.querySelector('#wrapper-life ul').style.display = 'block';
					$('#wrapper-life ul').animate({  
					    scrollTop:$('#wrapper-life ul').height()
					}, 0);
					setTimeout(function()
					{
						$('#wrapper-life ul').animate({  
						    scrollTop:'0px'
						}, 250);
					}, 1);
				}.bind(this), 1000);
			}.bind(this), 1000);
		}.bind(this), 1000);

		$('[data-personna]').on('click', function(e)
		{
			e.preventDefault();
			App.shop();
			wrapperLife.style.display = 'none';
			title.style.display = 'none';
		}.bind(this));

	},

	shop: function()
	{

		var wrapper = document.getElementById('wrapper');
		document.body.classList.add('select');
		wrapper.style.display = 'block';
		$('body').on('touchstart', '.shop li', function(e){
			var el = $("<li>" + $(this).html() + "</li>");
			var dataShop = $(this).attr('data-shop');
			var dataImg = $(this).attr('data-img');
			var dataPromo = $(this).attr('data-promo');
			el.css({
				left: e.originalEvent.touches[0].pageX + "px",
				top: e.originalEvent.touches[0].pageY + "px"
			});
			e.preventDefault();
			$('body').append(el);
			el.addClass('draggable');
			$('body').on('touchmove', '.shop li', function(e){
				e.preventDefault();
				el.css('display', 'block');
				el.css({
					left: e.originalEvent.touches[0].pageX + "px",
					top: e.originalEvent.touches[0].pageY + "px"
				});
			});
			$('body').on('touchend', '.shop li', function(e){
				$('body').off('touchmove');
				$('body').off('touchend');
				$('.selected').append('<div class="item"><img src="' + dataImg + '" /></div>');
				$('.img-promo').attr('src', dataPromo);
				el.remove();
			});
		});
	}

};

document.addEventListener( "DOMContentLoaded", App.preload.bind(this), false )
/*
document.addEventListener('touchmove', function(e) {
	e.preventDefault();
}, false);
*/
var socket = io.connect(IP+':3000');
socket.on('get_data', function (data) {
	document.querySelector('.selected').classList.add('move');
	$('.move').one('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', function() {
		socket.emit('send_shop');
	});
});

