var App = {

	init: function ()
	{
		var title = document.getElementById('title');
		var wrapper = document.getElementById('wrapper');

		setTimeout(function()
		{
			title.classList.add('fade');
			wrapper.style.display = 'block';

		}, 20);

	}

};

document.addEventListener( "DOMContentLoaded", App.init.bind(this), false )
