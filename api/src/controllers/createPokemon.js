const { Pokemons } = require("../db.js");

const createPokemon = async (pokemons) => {
    try {
        const creado = await Pokemons.create({
            name: pokemons.name,
            id: pokemons.id,
            image: pokemons.image,
            hp: pokemons.hp,
            attack: pokemons.attack,
            defense: pokemons.defense,
            speed: pokemons.speed,
            height: pokemons.height,
            weight: pokemons.weight,
          });
          console.log(creado, "!!");
          return creado 
          
    } catch (error) {
        console.log(error.message);
        return error.message
    }
 

};
module.exports = {createPokemon};