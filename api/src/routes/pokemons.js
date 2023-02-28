const { Router } = require("express");

const router = Router();

const getPokemonByName = require("../controllers/getPokemonByName");
const getPokemonById = require("../controllers/getPokemonById");
//const getAllPokemons = require("../controllers/getPokemons");

const { Pokemon, Type } = require("../db");

//ruta name

router.get("/", async (req, res) => {
  try {
    const { name } = req.query;
    const pokemonByName = await getPokemonByName(name); // funcion definida en el controller le paso name que me llega.
    if (pokemonByName.error) throw new Error(pokemonByName.error);
    res.status(200).json(pokemonByName);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

// Ruta Get by id //

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const pokemonId = await getPokemonById(id);
    if (pokemonId.error) throw new Error(pokemonId.error);
    res.status(200).json(pokemonId);
  } catch (error) {
    res.status(401).send(error.message);
  }
});

// ruta post . create pokemon

router.post("/", async (req, res) => {
  let { name, life, attack, defense, speed, height, weight, types, image } =
    req.body;

  if (!name) return res.status(400).send("Please insert a name");
  //necesarios: life || name || attack || defense || image;
  if (!attack) return res.status(400).send("complete attack");
  //if (!defense) return res.status(400).send("complete defense");
  //if (!life) return res.status(400).send("complete life");
  // if (!image) return res.status(400).send("Please select a picture");

  //if (!types.length || types.includes("") || types.length > 2)
  //return res.status(400).send("You have to choose between one or two types");

  try {
    let newPokemon = await Pokemon.create({
      name,
      life,
      attack,
      defense,
      speed,
      height,
      weight,
      types,
      image,
    });
    let typesDb = await Type.findAll({ where: { name: types } }); // donde el nombre sel type sea lo que me pasan por type
    newPokemon.addType(typesDb);
    res.status(200).send("Your Pokemon was created succesfully");
  } catch (error) {
    return { error: error.message };
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const pokemon = await Pokemon.findByPk(id);

  if (pokemon) {
    await pokemon.destroy();
    res.status(200).send("Pokemon deleted");
  } else {
    res.status(404).send("Pokemon not found");
  }
});

module.exports = router;

module.exports = router;
