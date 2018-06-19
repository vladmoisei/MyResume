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
var arrowDownBtn = document.getElementsByClassName("fa-chevron-down")[0];
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
	//var coursesListElemShort = document.getElementsByClassName("short__list");
	// console.log(bulletPointsList.length);
	//while (coursesListElemShort.length > 0) {
	//	coursesListElem[0].classList.remove("short__list");
	//}
	for (let elem of coursesListElem) {
		elem.classList.remove("short__list");
	}
}

function putArrowUp() {
	var arrowBtn = document.getElementsByClassName("fa-chevron-down")[0];
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
//Create event listener for extending list of courses
function arrowDownClick() {
	removeBulletPoints();
	listVerticalDisplay();
	putArrowUp();
	//removeFadeIn();
	addFadeIn();
}

arrowDownBtn.addEventListener('click', arrowDownClick);

(function addAnimatedFadeIn() {

	for (let elem of coursesListElem) {
		// elem.addClass('animated bounceOutLeft');
		elem.classList.add("animated");
		elem.classList.add("fadeIn");
		setTimeout(function() { removeFadeIn(); }, 1100);
	}

})();

