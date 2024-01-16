const getPokemon = require("./pokemonRandom")
async function MandarPokemones(){
    const pokemones = [];
    for(let i = 1;i <=3;i++){
        let Pokemon = await getPokemon();
        pokemones.push(Pokemon);
    }
    
    return pokemones;
}

module.exports = MandarPokemones