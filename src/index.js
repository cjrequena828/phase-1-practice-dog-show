document.addEventListener('DOMContentLoaded', () => {
//console.log("DOMContentLoaded");
})
 
const dogTable = document.getElementById("table-body");

function fetch(){
fetch(`http://localhost:3000/dogs`)
 .then(response => response.json())
 .then(console.log);
 }

// fetch("http://localhost:3000/dogs")
// 		.then(resp => resp.json())
// 		.then(console.log)

function addDogToPage(dogs) {
	console.log(addDogToPage);
    dogs.forEach(function(dog) {
		addDogTable(dog);
	})
}
function addDogTable(dog){
     newDogT = document.createElement('tr')
     

}
