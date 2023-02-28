import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonsNames } from "../../../redux/actions/actions";
import style from "../SearchBar/Search.module.css";

function SearchBar({ setCurrentPage }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handlerInputChange = (e) => {
    setName(e.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (!name) alert("insert a pokemon name to search");
    else dispatch(getPokemonsNames(name));

    setCurrentPage(1);
  };

  return (
    <div>
      <div className={style.searchContainer}>
        <form className={style.searchForm}>
          <input
            className={style.searchInput}
            type="text"
            placeholder="Pokemon name..."
            onChange={handlerInputChange}
          />
          <button
            className={style.searchButton}
            type="submit"
            onClick={handlerSubmit}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
