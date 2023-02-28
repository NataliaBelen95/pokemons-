const getAllPokemons = require("../controllers/getPokemons");

const getPokemonById = async (id) => {
  try {
    let allPokemons = await getAllPokemons();

    let pokemonById = allPokemons.find(
      (pokemon) => pokemon.id === Number(id) || pokemon.id === id
    );
    if (pokemonById) {
      return pokemonById;
    }
    throw new Error(`id not found`);
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = getPokemonById;
