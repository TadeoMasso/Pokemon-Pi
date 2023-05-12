
const getPokemonById = (id, pokeTotal) => {
  if (id.length > 5) {
    const pokemonIdCreado = pokeTotal.filter((p) => p.id === id);
    if (pokemonIdCreado.length > 0) {
      return { status: 200, data: pokemonIdCreado };
    }
  }
  if (id) {
    let pokemonId = pokeTotal.filter((p) => p.id === Number(id));
    if (pokemonId.length > 0) {
      return { status: 200, data: pokemonId };
    }
    return { status: 404, data: "No esta el pokemon" };
  }
};

module.exports ={ getPokemonById};
