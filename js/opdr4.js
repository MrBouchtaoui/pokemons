console.log("Opdracht 4 is running...");

const result = document.querySelector("div.result");

const url = "/data/poke.json";

fetch(url)
	.then((response) => response.json())
	.then((data) => showPokemon(data));

function showPokemon(data) {
	for (let index = 0; index < data.length; index++) {
		const pokemon = data[index];
		if (pokemon.level === 100) {
			console.log("Pokemon met forloop: ", pokemon);
		}
	}

	data.forEach((pokemon) => {
		if (pokemon.level === 100) {
			console.log("Pokemon met foreach: ", pokemon);

			result.innerHTML += `<p>${pokemon.name}</p><img src="${pokemon.img}" style="width:80px; height:80px">`;
		}
	});
}
