const { getAllPokemon } = require("../controllers/getAllPokemons");

const getPokemonByName = async (name) => {
  let pokeTotal = await getAllPokemon();
  if (name) {
    console.log(name);
    let pokemonName = pokeTotal.filter((p) =>
      p.name.toLowerCase().includes(name.toLowerCase())
    );
    if (pokemonName.length > 0) {
      return pokemonName;
    }
  }
  return null;
};

module.exports = { getPokemonByName };
