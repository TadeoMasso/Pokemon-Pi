const { Pokemons, Type } = require("../db.js");
const axios = require("axios");

const getApiInfo = async () => {
  const apiUrl = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=24`);
  const apiUrlFiltrada = apiUrl.data.results.map((p) => p.url);
  const results = await Promise.all(
    apiUrlFiltrada.map((url) => axios.get(url))
  );
  const data = results.map((results) => {
    return results.data;
  });
  const apiInfo = await data.map((p) => {
    return {
      id: p.id,
      name: p.name,
      hp: p.stats[0].base_stat,
      attack: p.stats[1].base_stat,
      defense: p.stats[2].base_stat,
      speed: p.stats[5].base_stat,
      height: p.height,
      weight: p.weight,
      image: p.sprites.other.dream_world.front_default,
      types: p.types.map((p) => p.type.name),
    };
  });
  return apiInfo;
};
const getDbInfo = async () => {
  return await Pokemons.findAll({
    includes: {
      model: Type,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
};
const getAllPokemon = async () => {
  const apiInfo = await getApiInfo();
  const dbInfo = await getDbInfo();
  const infoTotal = apiInfo.concat(dbInfo);
  return infoTotal;
};
module.exports = { getAllPokemon };
