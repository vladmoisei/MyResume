// Add points to importan skills
var skillEvaluation = document.getElementsByClassName("skill__evaluation");
console.log(skillEvaluation);
for (let elem of skillEvaluation) {
	for (let i = 0; i < 5; i++) {
		elem.innerHTML += '<span class="dot black"></span>';
	}
}