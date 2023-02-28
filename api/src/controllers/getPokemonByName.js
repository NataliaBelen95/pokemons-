const getAllPokemons = require("./getPokemons");

const getPokemonByName = async (name) => {
  try {
    let allPokemons = await getAllPokemons();

    if (name) {
      const pokeByName = allPokemons.filter(
        (poke) => name.toLowerCase() === poke.name.toLowerCase()
      );
      if (!pokeByName.length) throw new Error(`Pokemon ${name} not found`);

      return pokeByName;
    }
    return allPokemons;
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = getPokemonByName;
