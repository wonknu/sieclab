var App = {

	init: function ()
	{
		var title = document.getElementById('title');
		var wrapperLife = document.getElementById('wrapper-life');

		setTimeout(function()
		{
			title.classList.add('up');
			wrapperLife.style.display = 'block';
			title.classList.add('fade');

			setTimeout(function()
			{
				title.innerHTML = "Sélectionner votre instant de vie";
				title.classList.remove('fade');
				setTimeout(function()
				{
					document.querySelector('#wrapper-life ul').style.display = 'block';
				}.bind(this), 1000);
			}.bind(this), 1000);
		}.bind(this), 1000);

		$('[data-personna]').on('click', function(e)
		{
			e.preventDefault();
			console.log($(this).attr('data-personna'));
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
				console.log(dataShop);
				$('.selected').append('<div class="item">' + dataShop + '</div>');
				el.remove();
			});
		});
	}

};

document.addEventListener( "DOMContentLoaded", App.init.bind(this), false )
/*
document.addEventListener('touchmove', function(e) {
	e.preventDefault();
}, false);
*/
