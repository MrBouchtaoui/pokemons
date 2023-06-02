console.log("main.js is running...");

const result = document.querySelector("div.result");

const url = "/data/poke.json";

// Opdr. 1
fetch(url)
	.then((myData) => myData.json())
	.then((data) => {
		console.log(data);
		for (let i = 0; i < data.length; i++) {
			const element = data[i];
			document.body.innerHTML += `<p>${element.name}</p><img src="${element.img}">`;
		}
	});

	//opdr 2
	