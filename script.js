let url = "https://student-data-api.ashantilemonia.workers.dev/api/v1/datasets/African-American-Inventors-and-Scientists/records?limit=10"

let name = document.getElementById("outputName");
let lifeSpan = document.getElementById("outputLifeSpan");
let jobs = document.getElementById("outputOccupation");
let inventions = document.getElementById("outputInventions");
let inputBtn = document.getElementById("inputBtn");
let nextBtn = document.getElementById("nextBtn");
let learnMore = document.getElementById("learnMore");
let index = 0;


jobs.addEventListener("click",function () {
	document.getElementById("results-list").textContent = searchBox.value;
});


async function getinventors() {
	const response = await fetch(url);
	const data = await response.json();
	console.log(data);
	name.textContent = data.records[index].Name
	lifeSpan.textContent = data.records[index]["Date of birth / death"]
	jobs.textContent = data.records[index]["Occupation(s)"]
	inventions.textContent = data.records[index]["Inventions / accomplishments"]
};


inputBtn.addEventListener("click", function(){
	learnMore.style.display = "none";
	nextBtn.style.display = "block";
	getinventors();
});

nextBtn.addEventListener("click", function(){
	index = index + 1
	getinventors();
});
