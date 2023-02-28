import axios from "axios";
import {
  GET_ALL_POKEMONS,
  GET_DETAIL,
  GET_TYPES,
  FILTER_TYPES,
  CLEAN_DETAIL,
  GET_POKEMON_NAME,
  FILTER_CREATOR,
  POST_POKEMON,
  FILTER_ATTACK,
  FILTER_NAME_ALF,
} from "../actions/actionsTypes";

export const getAllPokemons = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/pokemons");
      const data = response.data;
      return dispatch({
        //despacho la action
        type: GET_ALL_POKEMONS,
        payload: data, // data ->lo que me devuelve la aciton
      });
    } catch (error) {
      return error.message;
    }
  };
};

export const getDetail = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/pokemons/${id}`);
      const dataId = response.data;
      return dispatch({
        //despacho la action
        type: GET_DETAIL,
        payload: dataId,
      });
    } catch (error) {
      return error.message;
    }
  };
};

export const clearDetail = () => {
  return { type: CLEAN_DETAIL };
};

export const getTypes = () => {
  //me traigo los types.
  return async (dispatch) => {
    //despacho
    try {
      const response = await axios.get("http://localhost:3001/types", {});
      return dispatch({ type: GET_TYPES, payload: response.data });
    } catch (error) {
      return error.message;
    }
  };
};
// action trae el nuevo pokemon, le paso payload, por que no llega vacia.

export const filteredTypes = (payload) => {
  //payload= valor que elija
  return {
    type: FILTER_TYPES,
    payload,
  };
};

export const filteredCreator = (payload) => {
  return {
    type: FILTER_CREATOR,
    payload,
  };
};

export const getPokemonsNames = (name) => {
  return async (dispatch) => {
    try {
      const dataName = await axios.get(
        `http://localhost:3001/pokemons?name=${name}`
      );
      return dispatch({
        type: GET_POKEMON_NAME,
        payload: dataName.data,
      });
    } catch (error) {
      return alert(`Pokemon ${name} not found`);
    }
  };
};

export const postPokemon = (payload) => {
  return async (dispatch) => {
    const createP = await axios.post("http://localhost:3001/pokemons", payload);
    return dispatch({
      type: POST_POKEMON,
      createP,
    });
  };
};

export const filterAttack = (payload) => {
  return {
    type: FILTER_ATTACK,
    payload,
  };
};

export const filterOrderAlf = (payload) => {
  //payload= valor que elija
  return {
    type: FILTER_NAME_ALF,
    payload,
  };
};
