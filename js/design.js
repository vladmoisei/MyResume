// Add points to important skills
var skillEvaluation = document.getElementsByClassName("skill__evaluation");
// console.log(skillEvaluation);
for (let elem of skillEvaluation) {
	for (let i = 0; i < 5; i++) {
		elem.innerHTML += '<span class="dot__circle black"></span>';
	}
}


/*Logic for courses section long and short version
 *************************************************************
 *************************************************************
 */
var arrowBtn = document.getElementById("arrow__button");
var arrowUpBtn = document.getElementsByClassName("fa-chevron-up")[0];
var coursesList = document.getElementsByClassName("courses__list")[0];
var coursesListElem = document.getElementsByClassName("elem");
// console.log(arrowDownBtn);
// console.log(arrowUpBtn);

function removeBulletPoints(className = "", sectionList = "") {
	if (className === "")
		className = "bullet";
	var bulletPointsList = document.getElementsByClassName(className);
	// console.log(className);
	// console.log(bulletPointsList.length);
	while (bulletPointsList.length > 0) {
		bulletPointsList[0].classList.remove(className);
	}

	if (sectionList === "")
		var coursesList = document.getElementsByClassName("courses__list")[0];
	else
		var coursesList = document.getElementById(sectionList);
	coursesList.classList.add("long__list");
}

function listVerticalDisplay(elementName = "", sectionList = "") {
	if (elementName === "")
		elementName = "elem";
	var coursesListElem = document.getElementsByClassName(elementName);
	for (let elem of coursesListElem) {
		elem.classList.remove("short__list");
		elem.classList.add("long__list__elem", "bottom__line");
	}
	// remove bootom line to the last element
	coursesListElem[coursesListElem.length-1].classList.remove("bottom__line");
	if (sectionList === "")
		var coursesList = document.getElementsByClassName("courses__list")[0];
	else
		var coursesList = document.getElementById(sectionList);
	// remove 3 points for short version list
	coursesList.classList.remove("end__points");
}

function putArrowUp(arrowClass = "") {
	if (arrowClass === "")
		var arrowBtn = document.getElementById("arrow__button");
	else var arrowBtn = document.getElementById(arrowClass);
	arrowBtn.classList.remove("fa-chevron-down");
	arrowBtn.classList.add("fa-chevron-up");
}

function removeFadeIn(elementName = "") {
	if (elementName === "")
		elementName = "elem";
	var coursesListElem = document.getElementsByClassName(elementName);
	// courses section
	for (let elem of coursesListElem) {
		// elem.addClass('animated bounceOutLeft');
		// elem.classList.add("animated");
		elem.classList.remove("fadeIn");
	}

}

function addFadeIn(elementName = "") {
	if (elementName === "")
		elementName = "elem";
	var coursesListElem = document.getElementsByClassName(elementName);
	for (let elem of coursesListElem) {
		// elem.addClass('animated bounceOutLeft');
		// elem.classList.add("animated");
		elem.classList.add("fadeIn");
	}
}

function addCoursesBackGround(sectionId = "") {
	if (sectionId === "")
		var coursesSection = document.getElementById("courses");
	else var coursesSection = document.getElementById(sectionId);
	coursesSection.classList.add("long__list__courses");
}

function arrowDownClick() {
	removeBulletPoints();
	listVerticalDisplay();
	putArrowUp();
	// removeFadeIn();
	addFadeIn();
	addCoursesBackGround();
}

function addBulletPoints(className = "", listPoint = "") {
	if (className === "")
		className = "bullet";
	if (listPoint === "")
		listPoint = "list__point";
	var bulletPointsList = document.getElementsByClassName(listPoint);
	// console.log(bulletPointsList.length);
	for (let i = 0; i < bulletPointsList.length; i++) {
		bulletPointsList[i].classList.add(className);
	}
	// coursesList.classList.remove("long__list");
}

function listHorizontalDisplay(elementName = "", sectionList = "") {
	if (elementName === "")
		elementName = "elem";
	var coursesListElem = document.getElementsByClassName(elementName);
	for (let elem of coursesListElem) {
		elem.classList.add("short__list");
		elem.classList.remove("long__list__elem", "bottom__line");
	}
	if (sectionList === "")
		var coursesList = document.getElementsByClassName("courses__list")[0];
	else
		var coursesList = document.getElementById(sectionList);
	if (elementName === "elem")
		coursesList.classList.add("end__points");
	// remove bootom line to the las element
	// coursesListElem[coursesListElem.length-1].classList.add("bottom__line");
}

function putArrowDown(arrowClass = "") {
	if (arrowClass === "")
		var arrowBtn = document.getElementById("arrow__button");
	else var arrowBtn = document.getElementById(arrowClass);
	arrowBtn.classList.remove("fa-chevron-up");
	arrowBtn.classList.add("fa-chevron-down");
}

function removeCoursesBackGround(sectionId = "") {
	if (sectionId === "")
		var coursesSection = document.getElementById("courses");
	else var coursesSection = document.getElementById(sectionId);
	coursesSection.classList.remove("long__list__courses");
}

function arrowUpClick() {
	addBulletPoints();
	listHorizontalDisplay();
	putArrowDown();
	addFadeIn();
	removeCoursesBackGround();
}
// Create event listener for extending list of courses
function arrowClick() {
	if (arrowBtn.classList.contains("fa-chevron-down"))
		arrowDownClick();
	else if (arrowBtn.classList.contains("fa-chevron-up"))
		arrowUpClick();
	setTimeout(function() { removeFadeIn(); }, 1100);
}

arrowBtn.addEventListener('click', arrowClick);

/*Logic for certification section long and short version
 *************************************************************
 *************************************************************
 */
var certificationSection = document.getElementById("certification");
var certificationListElem = document.getElementById("certification__list").children
var arrowBtnCertification = document.getElementById("arrow__button__cert");
var ciscoImgLink = document.getElementById("cisco__img__link");

function removeFadeInCert () {
		// certification section
	for (let elem of certificationListElem) {
		elem.classList.remove("fadeIn");
	}
}

function putArrowUpCert() {
	// var arrowBtn = document.getElementsByClassName("fa-chevron-down")[0];
	arrowBtnCertification.classList.remove("fa-chevron-down");
	arrowBtnCertification.classList.add("fa-chevron-up");
}

function addCertificationBackGround() {
	certificationSection.classList.add("long__list__courses");
	for (let elem of certificationListElem) {
		elem.classList.add("long__list__elem");
	}
}

function addFadeInCert() {
	for (let elem of certificationListElem) {
		// elem.addClass('animated bounceOutLeft');
		// elem.classList.add("animated");
		elem.classList.add("fadeIn");
	}
}

function addCiscoImgLink() {
	ciscoImgLink.classList.remove("hide");
}

function certificationArrowDownClick() {
	// removeBulletPoints();
	// listVerticalDisplay();
	putArrowUpCert();
	// removeFadeIn();
	addFadeInCert();
	addCertificationBackGround();
	addCiscoImgLink();
}

function putArrowDownCert() {
	arrowBtnCertification.classList.remove("fa-chevron-up");
	arrowBtnCertification.classList.add("fa-chevron-down");
}

function removeCertificationBackGround() {
	certificationSection.classList.remove("long__list__courses");
	for (let elem of certificationListElem) {
		elem.classList.remove("long__list__elem");
	}
}

function hideCiscoImgLink() {
	ciscoImgLink.classList.add("hide");
}

function certificationArrowUpClick() {
	// addBulletPoints();
	// listHorizontalDisplay();
	putArrowDownCert();
	addFadeInCert();
	removeCertificationBackGround();
	hideCiscoImgLink();
}


function certificationArrowClick () {
	if (arrowBtnCertification.classList.contains("fa-chevron-down"))
		certificationArrowDownClick();
	else if (arrowBtnCertification.classList.contains("fa-chevron-up"))
		certificationArrowUpClick();
	setTimeout(function() { removeFadeInCert(); }, 1100);
}

arrowBtnCertification.addEventListener('click', certificationArrowClick);

/*Logic for projects automation section long and short version
 *************************************************************
 *************************************************************
 */

var arrowBtnAut = document.getElementById("arrow__button__aut");
var automationListElem = document.getElementsByClassName("elem__aut");

function showTextProject(className = "") {
	var programmingListTextElem = document.getElementsByClassName(className);
	for (let elem of programmingListTextElem) {
		if (elem.classList.contains("hide"))
			elem.classList.remove("hide");
	}
}

function hideTextProject(className = "") {
	var programmingListTextElem = document.getElementsByClassName(className);
	for (let elem of programmingListTextElem) {
		if (!elem.classList.contains("hide"))
			elem.classList.add("hide");
	}
}

function AutArrowDownClick() {
	removeBulletPoints("bullet__aut" , "automation__list");
	listVerticalDisplay("elem__aut", "automation__list");
	putArrowUp("arrow__button__aut");
	addFadeIn("elem__aut");
	//alert("merge");
	addCoursesBackGround("automation");
	showTextProject("elem__text__aut");
}

function AutArrowUpClick() {
	addBulletPoints("bullet__aut", "list__point__aut");
	listHorizontalDisplay("elem__aut", "automation__list");
	putArrowDown("arrow__button__aut");
	addFadeIn("elem__aut");
	removeCoursesBackGround("automation");
	hideTextProject("elem__text__aut");
}
// Create event listener "for extending list of courses
function autArrowClick() {
	if (arrowBtnAut.classList.contains("fa-chevron-down"))
		AutArrowDownClick();
	else if (arrowBtnAut.classList.contains("fa-chevron-up"))
		AutArrowUpClick();
	setTimeout(function() { removeFadeIn("elem__aut"); }, 1100);
}

arrowBtnAut.addEventListener('click', autArrowClick);

// Photos carrousel logic
// First project
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
}
// Second project
var slideIndexTwo = 1;
showslidesTwo(slideIndexTwo);

function plusSlidesTwo(n) {
	showslidesTwo(slideIndexTwo += n);
}

function currentSlideTwo(n) {
	showslidesTwo(slideIndexTwo = n);
}

function showslidesTwo(n) {
	var i;
	var slidesTwo = document.getElementsByClassName("mySlidesTwo");
	var dotTwo = document.getElementsByClassName("dotTwo");
	if (n > slidesTwo.length) {slideIndexTwo = 1}
	if (n < 1) {slideIndexTwo = slidesTwo.length}
	for (i = 0; i < slidesTwo.length; i++) {
		slidesTwo[i].style.display = "none";
	}
	for (i = 0; i < dotTwo.length; i++) {
		dotTwo[i].className = dotTwo[i].className.replace(" active", "");
	}
	slidesTwo[slideIndexTwo-1].style.display = "block";
	dotTwo[slideIndexTwo-1].className += " active";
}

// Third project
var slideIndexThree = 1;
showslidesThree(slideIndexThree);

function plusSlidesThree(n) {
	showslidesThree(slideIndexThree += n);
}

function currentSlideThree(n) {
	showslidesThree(slideIndexThree = n);
}

function showslidesThree(n) {
	var i;
	var slidesThree = document.getElementsByClassName("mySlidesThree");
	var dotThree = document.getElementsByClassName("dotThree");
	if (n > slidesThree.length) {slideIndexThree = 1}
	if (n < 1) {slideIndexThree = slidesThree.length}
	for (i = 0; i < slidesThree.length; i++) {
		slidesThree[i].style.display = "none";
	}
	for (i = 0; i < dotThree.length; i++) {
		dotThree[i].className = dotThree[i].className.replace(" active", "");
	}
	slidesThree[slideIndexThree-1].style.display = "block";
	dotThree[slideIndexThree-1].className += " active";
}
// Show/ hide photos automation projects

var photosContainer1 = document.getElementById("imagesContainer1");
var photosContainer2 = document.getElementById("imagesContainer2");
var photosContainer3 = document.getElementById("imagesContainer3");
var dots1 = document.getElementById("dots1");
var dots2 = document.getElementById("dots2");
var dots3 = document.getElementById("dots3");
var imagShowBtn1 = document.getElementById("imagShowBtn1");
var imagShowBtn2 = document.getElementById("imagShowBtn2");
var imagShowBtn3 = document.getElementById("imagShowBtn3");

imagShowBtn1.addEventListener('click', function (e) {
	e.preventDefault();
	if (photosContainer1.classList.contains('hide')) {
		photosContainer1.classList.remove('hide');
		dots1.classList.remove('hide');
		imagShowBtn1.innerText = "Hide photos";
	}
	else {
		photosContainer1.classList.add('hide');
		dots1.classList.add('hide');
		imagShowBtn1.innerText = "Show photos";
	}
});

imagShowBtn2.addEventListener('click', function (e) {
	e.preventDefault();
	if (photosContainer2.classList.contains('hide')) {
		photosContainer2.classList.remove('hide');
		dots2.classList.remove('hide');
		imagShowBtn2.innerText = "Hide photos";
	}
	else {
		photosContainer2.classList.add('hide');
		dots2.classList.add('hide');
		imagShowBtn2.innerText = "Show photos";
	}
});

imagShowBtn3.addEventListener('click', function (e) {
	e.preventDefault();
	if (photosContainer3.classList.contains('hide')) {
		photosContainer3.classList.remove('hide');
		dots3.classList.remove('hide');
		imagShowBtn3.innerText = "Hide photos";
	}
	else {
		photosContainer3.classList.add('hide');
		dots3.classList.add('hide');
		imagShowBtn3.innerText = "Show photos";
	}
});

/*Logic for projects programming section long and short version
 *************************************************************
 *************************************************************
 */

var arrowBtnProg = document.getElementById("arrow__button__prog");
var programmingListElem = document.getElementsByClassName("elem__prog");
// var arrowBtnProg = document.getElementById("programm");
// var arrowUpBtn = document.getElementsByClassName("fa-chevron-up")[0];
// var coursesList = document.getElementsByClassName("courses__list")[0];

function showTextProject(className = "") {
	var programmingListTextElem = document.getElementsByClassName(className);
	for (let elem of programmingListTextElem) {
		if (elem.classList.contains("hide"))
			elem.classList.remove("hide");
	}
}

function hideTextProject(className = "") {
	var programmingListTextElem = document.getElementsByClassName(className);
	for (let elem of programmingListTextElem) {
		if (!elem.classList.contains("hide"))
			elem.classList.add("hide");
	}
}

function progArrowDownClick() {
	removeBulletPoints("bullet__prog" , "programming__list");
	listVerticalDisplay("elem__prog", "programming__list");
	putArrowUp("arrow__button__prog");
	addFadeIn("elem__prog");
	//alert("merge");
	addCoursesBackGround("programming");
	showTextProject("elem__text__prog");
}

function ProgArrowUpClick() {
	addBulletPoints("bullet__prog", "list__point__prog");
	listHorizontalDisplay("elem__prog", "programming__list");
	putArrowDown("arrow__button__prog");
	addFadeIn("elem__prog");
	removeCoursesBackGround("programming");
	hideTextProject("elem__text__prog");
}
// Create event listener "for extending list of courses
function progArrowClick() {
	if (arrowBtnProg.classList.contains("fa-chevron-down"))
		progArrowDownClick();
	else if (arrowBtnProg.classList.contains("fa-chevron-up"))
		ProgArrowUpClick();
	setTimeout(function() { removeFadeIn("elem__prog"); }, 1100);
}

arrowBtnProg.addEventListener('click', progArrowClick);

/*Logic for interview section long and short version
 *************************************************************
 *************************************************************
 */

var arrowBtnInter = document.getElementById("arrow__button__interview");
var interviewListElem = document.getElementsByClassName("elem__inter");
// var arrowBtnProg = document.getElementById("programm");
// var arrowUpBtn = document.getElementsByClassName("fa-chevron-up")[0];
// var coursesList = document.getElementsByClassName("courses__list")[0];


function interArrowDownClick() {
	//removeBulletPoints("bullet__prog" , "programming__list");
	listVerticalDisplay("elem__inter", "interview__list");
	putArrowUp("arrow__button__interview");
	addFadeIn("elem__inter");
	//alert("merge");
	addCoursesBackGround("interview");
	showTextProject("elem__text__inter");
}

function interArrowUpClick() {
	//addBulletPoints("bullet__prog", "list__point__prog");
	listHorizontalDisplay("elem__inter", "interview__list");
	putArrowDown("arrow__button__interview");
	addFadeIn("elem__inter");
	removeCoursesBackGround("interview");
	hideTextProject("elem__text__inter");
}
// Create event listener "for extending list of courses
function interArrowClick() {
	if (arrowBtnInter.classList.contains("fa-chevron-down"))
		interArrowDownClick();
	else if (arrowBtnInter.classList.contains("fa-chevron-up"))
		interArrowUpClick();
	setTimeout(function() { removeFadeIn("elem__inter"); }, 1100);
}

arrowBtnInter.addEventListener('click', interArrowClick);


//Function for adding fadeIn to text
(function addAnimatedFadeIn() {
	// Courses section
	for (let elem of coursesListElem) {
		// elem.addClass('animated bounceOutLeft');
		elem.classList.add("animated", "fadeIn");
		setTimeout(function() { removeFadeIn(); }, 1100);
	};
	// Certification section
	for (let element of certificationListElem) {
		// console.log(certificationListElem);
		// elem.addClass('animated bounceOutLeft');
		 element.classList.add("animated", "fadeIn");
		 setTimeout(function() { removeFadeInCert(); }, 1100);
	};

	// Programming section
	for (let element of automationListElem) {
		// console.log(certificationListElem);
		// elem.addClass('animated bounceOutLeft');
		 element.classList.add("animated", "fadeIn");
		 setTimeout(function() { removeFadeIn("elem__aut"); }, 1100);
	};
	// Programming section
	for (let element of programmingListElem) {
		// console.log(certificationListElem);
		// elem.addClass('animated bounceOutLeft');
		 element.classList.add("animated", "fadeIn");
		 setTimeout(function() { removeFadeIn("elem__prog"); }, 1100);
	};
	// Interview section
	for (let element of interviewListElem) {
		// console.log(certificationListElem);
		// elem.addClass('animated bounceOutLeft');
		 element.classList.add("animated", "fadeIn");
		 setTimeout(function() { removeFadeIn("elem__inter"); }, 1100);
	};
})();

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


