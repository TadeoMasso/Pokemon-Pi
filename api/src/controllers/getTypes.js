const axios = require("axios");
const { Type } = require("../db");

const getTypes = async (req, res) => {
  try {
    const typesApi = await axios.get(`https://pokeapi.co/api/v2/type`);
    const tipos = await typesApi.data;
    for (t of tipos.results) {
      const existe = await Type.findOne({
        where: {
          name: t.name,
        },
      });
      if (existe) return res.json(await Type.findAll()); 
      await Type.create({ name: t.name });
    }
    res.json(await Type.findAll());
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving types" });
  }
};

module.exports = { getTypes };
