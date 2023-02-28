import React from "react";
import { Link } from "react-router-dom";
import Form from "./Form";
import style from "../NewPokemon/NewPokemon.module.css";
import imgback from "../../../assets/backhome.png";

function NewPokemon() {
  return (
    <div>
      <Link to="/home">
        <button className={style.btn_3d}>
          <img src={imgback} alt="imgb" />{" "}
        </button>
      </Link>
      <Form />
    </div>
  );
}

export default NewPokemon;
