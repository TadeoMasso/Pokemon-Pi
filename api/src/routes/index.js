const { Router, query } = require("express");
const { getPokemonById } = require("../controllers/pokemonById");
const { getAllPokemon } = require("../controllers/getAllPokemons");
const { createPokemon } = require("../controllers/createPokemon");
const { getPokemonByName } = require("../controllers/getPokemonByName");
const { getTypes } = require("../controllers/getTypes");
const axios = require("axios");
const router = Router();

//No hay que tocar HECHA y OPTIMIZADA
router.get("/pokemons", async (req, res) => {
  try {
    const getPokemons = await getAllPokemon();
    res.status(200).json(getPokemons);
  } catch (error) {
    res.status(500).send(error.message);
  }
}),
  //Hecha
  router.get("/id/:id", async (req, res) => {
    const { id } = req.params;
    let pokeTotal = await getAllPokemon();
    const result = getPokemonById(id, pokeTotal);
    res.status(result.status).json(result.data);
  });

// Hecha
router.get("/pokename", async (req, res) => {
  const { name } = req.query;
  if (name) {
    console.log(name);
    const pokemonName = await getPokemonByName(name);
    if (pokemonName.length > 0) {
      return res.status(200).json(pokemonName);
    }
    return res.status(404).send("No se encontraron resultados");
  }
  return res.status(400).send("Se debe proporcionar un nombre");
});
//No hay que tocar HECHA
router.post("/createpokemons", async (req, res) => {
  const { name, id, image, hp, attack, speed, defense, height, weight } =
    req.body;
  const poke = { name, id, image, hp, attack, speed, defense, height, weight };
  try {
    const pokemons = await createPokemon(poke);

    res.status(200).send(pokemons);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
//Hecha
router.get("/types", getTypes);

module.exports = router;
