// Add points to important skills
var skillEvaluation = document.getElementsByClassName("skill__evaluation");
// console.log(skillEvaluation);
for (let elem of skillEvaluation) {
	for (let i = 0; i < 5; i++) {
		elem.innerHTML += '<span class="dot black"></span>';
	}
}


/*Logic for courses section long and short version
 *
 *
 */
var arrowBtn = document.getElementById("arrow__button");
var arrowUpBtn = document.getElementsByClassName("fa-chevron-up")[0];
var coursesList = document.getElementsByClassName("courses__list")[0];
var coursesListElem = document.getElementsByClassName("elem");
// console.log(arrowDownBtn);
// console.log(arrowUpBtn);

function removeBulletPoints() {
	var bulletPointsList = document.getElementsByClassName("bullet");
	// console.log(bulletPointsList.length);
	while (bulletPointsList.length > 0) {
		bulletPointsList[0].classList.remove("bullet");
	}
	coursesList.classList.add("long__list");
}

function listVerticalDisplay() {
	for (let elem of coursesListElem) {
		elem.classList.remove("short__list");
		elem.classList.add("long__list__elem", "bottom__line");
	}
	//remove bootom line to the las element
	coursesListElem[coursesListElem.length-1].classList.remove("bottom__line");
	//remove 3 points for short version list
	coursesList.classList.remove("end__points");
}

function putArrowUp() {
	//var arrowBtn = document.getElementsByClassName("fa-chevron-down")[0];
	arrowBtn.classList.remove("fa-chevron-down");
	arrowBtn.classList.add("fa-chevron-up");
}

function removeFadeIn() {
	for (let elem of coursesListElem) {
		// elem.addClass('animated bounceOutLeft');
		//elem.classList.add("animated");
		elem.classList.remove("fadeIn");
	}
}

function addFadeIn() {
	for (let elem of coursesListElem) {
		// elem.addClass('animated bounceOutLeft');
		//elem.classList.add("animated");
		elem.classList.add("fadeIn");
	}
}

function addCoursesBackGround() {
	var coursesSection = document.getElementById("courses");
	coursesSection.classList.add("long__list__courses");
}

function arrowDownClick() {
	removeBulletPoints();
	listVerticalDisplay();
	putArrowUp();
	//removeFadeIn();
	addFadeIn();
	addCoursesBackGround();
}

function addBulletPoints() {
	var bulletPointsList = document.getElementsByClassName("list__point");
	console.log(bulletPointsList.length);
	for (let i = 0; i < bulletPointsList.length; i++) {
		bulletPointsList[i].classList.add("bullet");
	}
	//coursesList.classList.remove("long__list");
}

function listHorizontalDisplay() {
	for (let elem of coursesListElem) {
		elem.classList.add("short__list");
		elem.classList.remove("long__list__elem", "bottom__line");
	}
	coursesList.classList.add("end__points");
	//remove bootom line to the las element
	//coursesListElem[coursesListElem.length-1].classList.add("bottom__line");
}

function putArrowDown() {
	arrowBtn.classList.remove("fa-chevron-up");
	arrowBtn.classList.add("fa-chevron-down");
}

function removeCoursesBackGround() {
	var coursesSection = document.getElementById("courses");
	coursesSection.classList.remove("long__list__courses");
}

function arrowUpClick() {
	addBulletPoints();
	listHorizontalDisplay();
	putArrowDown();
	addFadeIn();
	removeCoursesBackGround();
}
//Create event listener for extending list of courses
function arrowClick() {
	if (arrowBtn.classList.contains("fa-chevron-down"))
		arrowDownClick();
	else if (arrowBtn.classList.contains("fa-chevron-up"))
		arrowUpClick();
	setTimeout(function() { removeFadeIn(); }, 1100);
}

arrowBtn.addEventListener('click', arrowClick);

(function addAnimatedFadeIn() {

	for (let elem of coursesListElem) {
		// elem.addClass('animated bounceOutLeft');
		elem.classList.add("animated", "fadeIn");
		setTimeout(function() { removeFadeIn(); }, 1100);
	}

})();

/*Logic for certification section long and short version
 *
 *
 */

