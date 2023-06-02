const url = "/data/poke.json";
const result = document.querySelector(".dropdown-item");

const typeFire = "fire";
const typeGrass = "grass/poison";
const typePsychic = "psychic;";

fetch(url)
	.then((data) => data.json())
	.then((jsonData) => showTypes(jsonData));

function showTypes(data) {
	const fireList = data.filter((pokemon) => pokemon.type === typeFire);
	console.log("fire: ", fireList);

	const grassList = data.filter((pokemon) => pokemon.type === typeGrass);
	console.log("grass: ", grassList);

	const psychicList = data.filter((pokemon) => pokemon.type === typePsychic);
	console.log("psychic: ", psychicList);
}
