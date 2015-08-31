(function(){
	var counter = 0,
		items = document.querySelectorAll('.slideshow figure'),
		next = document.querySelector('.next'),
		prev = document.getElementsByClassName('prev')[0],
		numItems = items.length;

		var timer = setTimeout(cycle, 5000);

		function cycle(){
				next.click();
		}

		function reset(){
			timer = setTimeout(cycle, 5000);
		}

		function showCurrent(){
			var itemToShow = Math.abs(counter%numItems);

			for(var i = 0; i <numItems; i++){
				items[i].classList.remove('show');
			}
			items[itemToShow].classList.add('show');
		}

		next.addEventListener('click', function(){
			clearTimeout(timer);
			reset();
			counter++;
			showCurrent();
		});
		prev.addEventListener('click', function(){
			clearTimeout(timer);
			reset();
			counter--;
			showCurrent();
		});

})();