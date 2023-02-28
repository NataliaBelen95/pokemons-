import React from "react";

import Cards from "./Cards/Cards";
import style from "../Home/Home.module.css";
import { Link } from "react-router-dom";
import { getAllPokemons } from "../../../redux/actions/actions";
import { useDispatch } from "react-redux";
//import SearchBar from "../SearchBar/SearchBar";
import img from "../../.././assets/reload.png";

const Home = () => {
  // 0 /-> 12-12

  //const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();

  const handlerClick = (e) => {
    e.preventDefault();
    dispatch(getAllPokemons());
  };

  return (
    <div>
      <div className={style.contenedor}>
        <div className={style.botonContainer}>
          <button className={style.botoncito} onClick={handlerClick}>
            <img className={style.imgreload} src={img} alt="reload" />
          </button>
          <Link className={style.linken} to="/createPoke">
            <button className={style.botoncito_2}>Create your Pokemon</button>
          </Link>
        </div>
      </div>

      <div className={style.HomeCards}>
        <Cards />
      </div>
    </div>
  );
};

export default Home;
