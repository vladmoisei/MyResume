			// Add points to important skills
			var skillEvaluation = document.getElementsByClassName("skill__evaluation");
			// console.log(skillEvaluation);
			for (let elem of skillEvaluation) {
				for (let i = 0; i < 5; i++) {
					elem.innerHTML += '<span class="dot__circle black"></span>';
				}
			}

			var aboutMeText = document.getElementById("about__me__text");

			aboutMeText.addEventListener('click', function() {
				if (aboutMeText.classList.contains("end__points__about")) {
					aboutMeText.classList.remove("end__points__about");
				}
			});

			// Function for event listener screen < 749px
			var aboutMEParagraph = document.getElementById("about__me__text");
			function myFunction(win) {
				if (win.matches) { // If media query matches
					// document.body.style.backgroundColor = "yellow";
					if (!aboutMEParagraph.classList.contains("end__points__about")) {
						aboutMEParagraph.classList.add("end__points__about");
					}
				} else {
					// document.body.style.backgroundColor = "pink";
				}
			};

			var win = window.matchMedia("(max-width: 749px)");
			myFunction(win); // Call listener function at run time
			win.addListener(myFunction); // Attach listener function on state changes
			// *******************************************
			// *******************************************


			/*
			* Open the drawer when the menu ison is clicked.
			*/
			var menu = document.querySelector('#menu');
			var main = document.querySelector('main');
			var drawer = document.querySelector('.menu__aside');

			menu.addEventListener('click', function(e) {
				drawer.classList.toggle('open');
				e.stopPropagation();
			});
			main.addEventListener('click', function() {
				drawer.classList.remove('open');
			});
