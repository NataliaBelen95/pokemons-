import React from "react";
// componente que recibe toda la info del componente smart , para renderizar una card de Pokemon
import style from "../Card/Card.module.css";

const Card = ({ image, name, types, attack }) => {
  //const typeNames = Array.isArray(types) ? types : [{ name: types }]; // compruebo si el types que nos llega del pokemon creado es array
  // types del creado es !== a types de los pokemons de api que es [], Si types no es un array, creo unobjeto con una propiedad name, dentro de un array y se almacena en la variable typeNames.

  return (
    <div className={style.CardContainer}>
      <div className={style.divImg}>
        <img src={image} alt={name} />
      </div>

      <div className={style.namePokeDiv}>
        <span className={style.title}>{name}</span>
      </div>
      <div className={style.typePokeDiv}>
        <h2>{attack}</h2>
      </div>

      <div className={style.typePokeDiv}>
        {types.length === 2 ? ( // si tiene 2 renderizo dos h2 con c/u dependiendo de donde venga y si tiene solo uno renderizo uno u otro
          <div>
            <h2>{types[0]}</h2>
            <h2>{types[1]}</h2>
          </div>
        ) : (
          <h2>{types[0]}</h2>
        )}
      </div>
    </div>
  );
};

export default Card;
