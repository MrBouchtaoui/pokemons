console.log("opdr.3 is running...");
const url = "/data/poke.json";
result = document.querySelector(".result");

fetch(url)
	.then((response) => response.json())
	.then((data) => randomPokemons(data));

let randomNumber = 0;
function randomPokemons(data) {
	for (let i = 0; i < 10; i++) {
		const random = Math.random() * data.length; // 0 .. 1
		console.log("Random zonder floor: ", random);
		randomNumber = Math.round(random);
		console.log("Random met floor: ", randomNumber);

		const element = data[randomNumber];
		result.innerHTML += `<p>${element.name}</p> <img src="${element.img}">`;
	}
}
