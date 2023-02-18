// const data = [
//     { name: 'normal', url: 'https://pokeapi.co/api/v2/type/1/' },
//     { name: 'fighting', url: 'https://pokeapi.co/api/v2/type/2/' },
//     { name: 'flying', url: 'https://pokeapi.co/api/v2/type/3/' },
//     { name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/' },
//     { name: 'ground', url: 'https://pokeapi.co/api/v2/type/5/' },
//     { name: 'rock', url: 'https://pokeapi.co/api/v2/type/6/' },
//     { name: 'bug', url: 'https://pokeapi.co/api/v2/type/7/' },
//     { name: 'ghost', url: 'https://pokeapi.co/api/v2/type/8/' },
//     { name: 'steel', url: 'https://pokeapi.co/api/v2/type/9/' },
//     { name: 'fire', url: 'https://pokeapi.co/api/v2/type/10/' },
//     { name: 'water', url: 'https://pokeapi.co/api/v2/type/11/' },
//     { name: 'grass', url: 'https://pokeapi.co/api/v2/type/12/' },
//     { name: 'electric', url: 'https://pokeapi.co/api/v2/type/13/' },
//     { name: 'psychic', url: 'https://pokeapi.co/api/v2/type/14/' },
//     { name: 'ice', url: 'https://pokeapi.co/api/v2/type/15/' },
//     { name: 'dragon', url: 'https://pokeapi.co/api/v2/type/16/' },
//     { name: 'dark', url: 'https://pokeapi.co/api/v2/type/17/' },
//     { name: 'fairy', url: 'https://pokeapi.co/api/v2/type/18/' },
//     { name: 'unknown', url: 'https://pokeapi.co/api/v2/type/10001/' },
//     { name: 'shadow', url: 'https://pokeapi.co/api/v2/type/10002/' }
// ];

// const newData = [];

// for (let elem of data) newData.push(elem.name);

// console.log(newData);

let arr = [
	{
		"id": "6726fe0b-95b6-42af-8c8e-65e6d9c431ce",
		"name": "menso",
		"image": "https://image.com",
		"hp": 70,
		"attack": 9,
		"defense": 10,
		"speed": 45,
		"height": 92,
		"weight": 20,
		"created": true,
		"types": [
			{
				"name": "fire"
			},
			{
				"name": "electric"
			},
			{
				"name": "bug"
			}
		]
	},
    {
		"id": "6726fe0b-95b6-42af-8c8e-65e6d9c431ce",
		"name": "menso",
		"image": "https://image.com",
		"hp": 70,
		"attack": 9,
		"defense": 10,
		"speed": 45,
		"height": 92,
		"weight": 20,
		"created": true,
		"types": [
			{
				"name": "fire"
			},
			{
				"name": "electric"
			},
			{
				"name": "bug"
			}
		]
	},
];

const newArray = arr.map(pokemon => ({
    ...pokemon,
    types: pokemon.types.map(type => type.name),  
}));

console.log(newArray);
