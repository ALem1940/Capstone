let url = "https://student-data-api.ashantilemonia.workers.dev/api/v1/datasets/African-American-Inventors-and-Scientists/records?limit=10"

let name = document.getElementById("outputName");
let jobs = document.getElementById("outputOccupation");





async function getinventors() {
	const response = await fetch(url);
	const data = await response.json();
	console.log(data);
	name.textContent = data.records[0].Name
jobs.textContent = data.records[0]["Occupation(s)"]
};

getinventors();
	