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
 *
 *
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

/*Logic for projects programming section long and short version
 *
 *
 */

var arrowBtnProg = document.getElementById("arrow__button__prog");
var programmingListElem = document.getElementsByClassName("elem__prog");
// var arrowBtnProg = document.getElementById("programm");
// var arrowUpBtn = document.getElementsByClassName("fa-chevron-up")[0];
// var coursesList = document.getElementsByClassName("courses__list")[0];


function progArrowDownClick() {
	removeBulletPoints("bullet__prog" , "programming__list");
	listVerticalDisplay("elem__prog", "programming__list");
	putArrowUp("arrow__button__prog");
	addFadeIn("elem__prog");
	//alert("merge");
	addCoursesBackGround("programming");
}

function ProgArrowUpClick() {
	addBulletPoints("bullet__prog", "list__point__prog");
	listHorizontalDisplay("elem__prog", "programming__list");
	putArrowDown("arrow__button__prog");
	addFadeIn("elem__prog");
	removeCoursesBackGround("programming");
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
	for (let element of programmingListElem) {
		// console.log(certificationListElem);
		// elem.addClass('animated bounceOutLeft');
		 element.classList.add("animated", "fadeIn");
		 setTimeout(function() { removeFadeIn("elem__prog"); }, 1100);
	};
})();


