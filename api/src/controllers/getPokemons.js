const axios = require("axios");
const { Pokemon, Type } = require("../db");

// GET A LOS DATOS DE LA API
const getApiData = async () => {
  const apiPage1 = await axios.get("https://pokeapi.co/api/v2/pokemon");
  const apiPage2 = await axios.get(apiPage1.data.next);
  const pokemons = [...apiPage1.data.results, ...apiPage2.data.results];

  const AllPokemons = await Promise.all(
    // promesas de los pedidos a axios anteriores.
    pokemons.map(async (el) => {
      let pokemon = await axios(el.url);
      return {
        id: pokemon.data.id,
        name: pokemon.data.name,
        types: pokemon.data.types.map((t) => t.type.name), //lOS TIPOS ESTAN EN SU PROPIEDAD NAME
        image: pokemon.data.sprites.front_default,
        life: pokemon.data.stats[0].base_stat,
        attack: pokemon.data.stats[1].base_stat,
        defense: pokemon.data.stats[2].base_stat,
        speed: pokemon.data.stats[3].base_stat,
        height: pokemon.data.height,
        weight: pokemon.data.weight,
        createinDb: false,
      };
    })
  );
  return AllPokemons;
};

// GET A LOS DATOS DE LA BASE DE DATOS
const getDbData = async () => {
  try {
    const results = await Pokemon.findAll({
      //TRAERME TODO LO DE LA TABLA POKEMON, INCLUIDA LA RELACION CON TYPE
      include: {
        //modelo con el que se relaciona Pokemon
        model: Type,
        attributes: ["name"], // ---incluimos solo esto.
        through: {
          attributes: [], // no incluir atributos tabla intermedia
        },
      },
    });

    const datBmap = results.map((poke) => ({
      ...poke.toJSON(), //convertir el objeto Sequelize en un objeto plano de JavaScript.  el spread operator es necesario para crear un objeto de JavaScript a partir del objeto JSON retornado por la función toJSON().

      // id: r.id,
      //name: poke.name,
      types: poke.types.map((t) => t.name),
      // life: r.life,
      //  attack: r.attack,
      // defense: r.defense,
      // speed: r.speed,
      // height: r.height,
      //  weight: r.weight,
      //  image: r.image,
      //  createinDb: r.createinDb,
    }));
    return datBmap;
  } catch (error) {
    return { error: error.message };
  }
};

//CONCATENACION DE LOS DOS RESULTADOS ENCONTRADOS..
const getAllPokemons = async () => {
  const apiData = await getApiData(); //GUARDO LOS DATOS DE LA CONSULTA A LA API
  const dbData = await getDbData(); //GUARDO LOS DATOS DE LA CONSULTA A LA DB
  const totalPokemons = apiData.concat(dbData); //CONCATENO LAS DOS Y RETORNO ESTO.
  return totalPokemons;
};

module.exports = getAllPokemons;
