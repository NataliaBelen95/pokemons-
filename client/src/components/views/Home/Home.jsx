import React from "react";

import Cards from "./Cards/Cards";
import style from "../Home/Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  // 0 /-> 12-12

  //const [currentPage, setCurrentPage] = useState(1);

  return (
    <div>
      <div className={style.contenedor}>
        <div className={style.botonContainer}>
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
