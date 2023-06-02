console.log("Opdracht 2 is running...");

const url = '/data/poke.json'

result = document.querySelector(".result");

fetch(url)
.then(response => response.json())
.then(data => showFirstTenPokemons(data))

function showFirstTenPokemons(data) {
    console.log(data);
    const maxLoop = 10;
    for (let i = 0; i < maxLoop; i++) {
        const element = data[i];

        console.log(element);

        result.innerHTML += `${element.name} `
        
    }
    
}

