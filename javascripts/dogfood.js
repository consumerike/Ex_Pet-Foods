let doggieBrands = [];


let brandedDogs = document.getElementById('dog_brands');
function displayProducts() {
	console.log("doggieBrands",doggieBrands );
	doggieBrands.forEach( function(element, index) {
		brandedDogs.innerHTML += `${element.name} options: ${element.types[0].type} in ${element.types[0].volumes[0].name} for ${element.types[0].volumes[0].price} <br>OR <br> 
		${element.types[1].type} in ${element.types[1].volumes[1].name} for ${element.types[1].volumes[1].price} `;
	});
}

let getBrands = new XMLHttpRequest();
getBrands.open("GET", "data/Dogfood.json");
getBrands.send();

getBrands.addEventListener("load", function () {
	doggieBrands = JSON.parse(this.responseText).dog_brands;
	displayProducts(doggieBrands);


})

