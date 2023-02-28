import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons } from "../../../../redux/actions/actions";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import style from "./Cards.module.css";
import Paginado from "./Paginado/paginado";
import {
  getTypes,
  filteredTypes,
  filteredCreator,
  filterAttack,
  filterOrderAlf,
} from "../../../../redux/actions/actions";
import SearchBar from "../../SearchBar/SearchBar";

const Cards = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);
  const typesPokemon = useSelector((state) => state.allTypes);
  const [loading, setLoading] = useState(true);
  const [, /*order*/ setOrder] = useState(""); //para los sort

  ////paginado
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage] = useState(12);
  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = pokemons?.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );

  useEffect(() => {
    dispatch(getAllPokemons()).then(() => setLoading(false));
  }, [dispatch]);

  //dispatch de types
  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  //handlers filtros

  const handleTypeSelect = (e) => {
    dispatch(filteredTypes(e.target.value));
    setCurrentPage(1);
  };

  const handleCreatedFilter = (e) => {
    dispatch(filteredCreator(e.target.value));
    setCurrentPage(1);
  };

  const handlerAlfNames = (e) => {
    const order = e.target.value;
    dispatch(filterOrderAlf(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordered ${order}}`);
  };

  const handlerAttack = (e) => {
    e.preventDefault();
    const order = e.target.value;
    dispatch(filterAttack(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordered ${order}}`); //seteo ordenado de una forma y que modifique el renderizado.
  };

  //paginado

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //renderizado

  return (
    <>
      {loading ? (
        <div>
          <span className={style.loader}></span>
        </div>
      ) : (
        <div className={style.contCards}>
          <div className={style.contSearch}>
            <SearchBar setCurrentPage={setCurrentPage} />
          </div>
          <div className={style.filterContainer}>
            <label>
              <select
                value=""
                className={style.selects}
                onChange={handleCreatedFilter}
              >
                <option value="">Filter b/Creator</option>
                <option value="All">All </option>
                <option value="api">Api</option>
                <option value="createInDb">Created</option>
              </select>
            </label>
          </div>
          <div className={style.filterContainer}>
            <label>
              <select
                className={style.selects}
                value=""
                onChange={handlerAlfNames}
              >
                <option value="" disabled>
                  Alfabetic Order
                </option>
                <option value="asc">A-Z</option>
                <option value="desc">Z-A</option>
              </select>
            </label>
          </div>
          <div className={style.filterContainer}>
            <label>
              <select
                value=""
                className={style.selects}
                onChange={handleTypeSelect}
              >
                <option value="" disabled>
                  Filter b/Types
                </option>
                <option value="All">All Types</option>
                {typesPokemon &&
                  typesPokemon.map((t) => {
                    return (
                      <option key={t.id} value={t.name}>
                        {t.name}
                      </option>
                    );
                  })}
              </select>
            </label>
          </div>
          <div className={style.filterContainer}>
            <label>
              <select
                className={style.selects}
                value=""
                onChange={handlerAttack}
              >
                <option value="" disabled>
                  Filter b/Attack
                </option>
                <option value="asc">Less to More</option>
                <option value="desc">More to Less</option>
              </select>
            </label>
          </div>

          <div className={style.CardsContainer}>
            {currentPokemons?.map(({ id, name, image, types }) => {
              return (
                <div key={id}>
                  <Link className={style.linkecito} to={`/detail/${id}`}>
                    <Card name={name} types={types} image={image} />
                  </Link>
                </div>
              );
            })}
            <Paginado
              pokemonsPerPage={pokemonsPerPage}
              totalPokemons={pokemons.length}
              paginate={paginado}
              currentPage={currentPage}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Cards;
