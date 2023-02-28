import React from "react";
import { Link } from "react-router-dom";
import style from "../Landing/Landing.module.css";
//import img from "../../../assets/landing1.png";
import imgAsh from "../../../assets/fondolanding.png";
import pokebola from "../../../assets/pokebola.png";
//import charimg from "../../../assets/charm.png";
const Landing = () => {
  return (
    <div className={style.LandingCont}>
      <div className={style.division}></div>
      <div className={style.division2}>
        <div className={style.imgAsh}>
          <img src={imgAsh} alt={"imgLanding"} />
        </div>
        <div className={style.info}>
          <h1>Hello!</h1>
          <h3>Welcome to Henry's Pokemons App</h3>
          <h2>Click to start</h2>
          <Link to="/home">
            <img className={style.linkin} src={pokebola} alt={"pokebola.img"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
