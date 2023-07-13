"use strict";

console.log("----------------------------------------");
console.log("Fetch Poke JSON");



const pokemonInfo = document.getElementById('pokemon-info');

const pokemonStats = document.getElementById('pokemon-stats');

// Datos del Pokémon
const pokemonData = {
   "name": "Bulbasaur",
   "stats": [
      {
         "base_stat": 45,
         "effort": 0,
         "stat": {
            "name": "hp",
            "url": "https://pokeapi.co/api/v2/stat/1/"
         }
      },
      {
         "base_stat": 49,
         "effort": 0,
         "stat": {
            "name": "attack",
            "url": "https://pokeapi.co/api/v2/stat/2/"
         }
      },
      {
         "base_stat": 49,
         "effort": 0,
         "stat": {
            "name": "defense",
            "url": "https://pokeapi.co/api/v2/stat/3/"
         }
      },
      {
         "base_stat": 65,
         "effort": 1,
         "stat": {
            "name": "special-attack",
            "url": "https://pokeapi.co/api/v2/stat/4/"
         }
      },
      {
         "base_stat": 65,
         "effort": 0,
         "stat": {
            "name": "special-defense",
            "url": "https://pokeapi.co/api/v2/stat/5/"
         }
      },
      {
         "base_stat": 45,
         "effort": 0,
         "stat": {
            "name": "speed",
            "url": "https://pokeapi.co/api/v2/stat/6/"
         }
      }
   ]
};

// Mostrar los datos del Pokémon en el HTML
pokemonStats.innerHTML = `
   <div>
      <span>hp</span>
      <span>${pokemonData.stats[0].base_stat}</span>
   </div>
   <div>
      <span>attack</span>
      <span>${pokemonData.stats[1].base_stat}</span>
   </div>
   <div>
      <span>defense</span>
      <span>${pokemonData.stats[2].base_stat}</span>
   </div>
   <div>
      <span>special-attack</span>
      <span>${pokemonData.stats[3].base_stat}</span>
   </div>
   <div>
      <span>special-defense</span>
      <span>${pokemonData.stats[4].base_stat}</span>
   </div>
   <div>
      <span>speed</span>
      <span>${pokemonData.stats[5].base_stat}</span>
   </div>
`;
