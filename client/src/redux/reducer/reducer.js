import {
  GET_ALL_POKEMONS,
  GET_DETAIL,
  GET_TYPES,
  FILTER_TYPES,
  CLEAN_DETAIL,
  FILTER_CREATOR,
  GET_POKEMON_NAME,
  POST_POKEMON,
  FILTER_NAME_ALF,
  FILTER_ATTACK,
} from "../actions/actionsTypes";

const initialState = {
  pokemons: [],
  detail: {},
  allTypes: [],
  allPokemons: [],
  filteredPokemons: [],
  newPokemon: [],
  //tener otro array con todos los pokemons //para no pisar el otro estado
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_POKEMONS:
      return {
        ...state,
        pokemons: payload,
        allPokemons: payload,
      };

    case GET_DETAIL:
      return {
        ...state,
        detail: payload,
      };
    case CLEAN_DETAIL:
      return {
        ...state,
        detail: {},
      };

    case GET_TYPES:
      return {
        ...state,
        allTypes: payload,
      };

    case FILTER_TYPES:
      const allPokemons = state.allPokemons;
      const filteredTypes =
        payload === "All"
          ? allPokemons
          : allPokemons.filter((p) => p.types.includes(payload)); //includes por que es array de strings
      return {
        ...state,
        pokemons: filteredTypes,
        filteredPokemons: filteredTypes,
      };

    case FILTER_CREATOR:
      const createdFilter =
        payload === "createInDb"
          ? state.allPokemons.filter((p) => p.createinDb)
          : state.allPokemons.filter((p) => !p.createinDb);
      return {
        ...state,
        pokemons: payload === "All" ? state.allPokemons : createdFilter,
        filteredPokemons: createdFilter,
      };

    case GET_POKEMON_NAME:
      return {
        ...state,
        pokemons: payload, // en pokemons por que es lo que estoy renderizando. y lo hicimos en el back.
      };
    case POST_POKEMON:
      return {
        ...state,
        pokemons: payload,
        newPokemon: payload,
      };
    case FILTER_ATTACK:
      const pokemonsAll = state.filteredPokemons;
      const order =
        payload === "asc"
          ? pokemonsAll.sort((a, b) => {
              if (a.attack > b.attack) {
                return 1;
              }
              if (b.attack > a.attack) {
                return -1;
              }
              return 0;
            })
          : pokemonsAll.sort(function (a, b) {
              if (a.attack > b.attack) {
                return -1;
              }
              if (b.attack > a.attack) {
                return 1;
              }
              return 0;
            });
      if (state.filteredPokemons.length > 0) {
        const orderAt =
          payload === "asc"
            ? state.filteredPokemons.sort((a, b) => {
                if (a.attack > b.attack) {
                  return 1;
                }
                if (b.attack > a.attack) {
                  return -1;
                }
                return 0;
              })
            : state.filteredPokemons.sort(function (a, b) {
                if (a.attack > b.attack) {
                  return -1;
                }
                if (b.attack > a.attack) {
                  return 1;
                }
                return 0;
              });
        return {
          ...state,
          pokemons: orderAt,
        };
      } else {
        return {
          ...state,

          filteredPokemons: order,
        };
      }

    case FILTER_NAME_ALF:
      const allPokemons2 = state.allPokemons; // aca filtro todos los pokemons, usando "copia del estado"
      let sortedArr =
        payload === "asc"
          ? allPokemons2.sort(function (a, b) {
              if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
              }
              if (b.name.toLowerCase() > a.name.toLowerCase()) {
                return -1;
              }
              return 0;
            })
          : allPokemons2.sort(function (a, b) {
              if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return -1;
              }
              if (b.name.toLowerCase() > a.name.toLowerCase()) {
                return 1;
              }
              return 0;
            });
      if (state.filteredPokemons.length > 0) {
        // si se fueron guardando pokemons en el filteredPokemons que me los ordene tambein.
        const filteredArr =
          payload === "asc"
            ? state.filteredPokemons.sort(function (a, b) {
                if (a.name.toLowerCase() > b.name.toLowerCase()) {
                  return 1;
                }
                if (b.name.toLowerCase() > a.name.toLowerCase()) {
                  return -1;
                }
                return 0;
              })
            : state.filteredPokemons.sort(function (a, b) {
                if (a.name.toLowerCase() > b.name.toLowerCase()) {
                  return -1;
                }
                if (b.name.toLowerCase() > a.name.toLowerCase()) {
                  return 1;
                }
                return 0;
              });
        return {
          ...state,
          pokemons: filteredArr,
        };
      } else {
        return {
          ...state,

          filteredPokemons: sortedArr,
        };
      }

    default:
      return { ...state };
  }
};

export default reducer;
