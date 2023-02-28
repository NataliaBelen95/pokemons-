import React from "react";
import style from "../NewPokemon/Form.module.css";
import { useHistory } from "react-router-dom";
import { postPokemon, getTypes } from "../../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { validation } from "./validation";
import img from "../../../assets/form4.png";

const Form = () => {
  const dispatch = useDispatch();
  const typesPokemon = useSelector((state) => state.allTypes);
  const history = useHistory();

  /// delete types
  const handlerDeleteTypes = (type) => {
    setInput({
      ...input,
      types: input.types.filter((ty) => ty !== type),
    });
  };
  /////////

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  //input vacio
  const [input, setInput] = useState({
    name: "",
    life: "",
    attack: "",
    image: "",
    defense: "",
    weight: "",
    height: "",
    speed: "",
    types: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    attack: "",
    image: "",
    defense: "",
    weight: "",
    height: "",
    speed: "",
    types: [],
  });
  // manejador de event. seteo input/ primero me hago copia
  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
      // event objeto donde esta target.  que es un obj.  y tiene propiedad name(nombre del input donde el usuario escribe) y value(valor de lo que esta poniendo el user)
    });
    setErrors(
      validation({
        ...input, //copia del input
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que los campos requeridos estén completos, incluyendo al menos un tipo

    if (
      input.name &&
      input.life &&
      input.attack &&
      input.defense &&
      input.image &&
      input.types.length >= 1 &&
      input.speed &&
      input.weight &&
      input.height
    ) {
      // Enviar los datos si no hay errores --> dispatch newPokemon
      dispatch(postPokemon(input));
      alert("Your Pokemon was created successfully");

      setInput({
        name: "",
        life: "",
        attack: "",
        image: "",
        defense: "",
        height: "",
        weight: "",
        speed: "",
        types: [],
      });
      setErrors({
        name: "",
        attack: "",
        image: "",
        defense: "",
        speed: "",
        weight: "",
        height: "",
        types: [], //actualizar el estado de errors al mismo tiempo que el estado de input
      });

      history.push("/home");
    } else {
      window.alert("Please complete all");
    }
  };

  // concatena en un arreglo todo lo que selecciono en el select.
  const handlerSelect = (e) => {
    // manejo de los types

    if (input.types.length < 2 && e.target.value) {
      setInput({
        ...input,
        types: [...input.types, e.target.value],
      });

      setErrors({
        types: [], //para que se actualice , si seleccionan 2 y despues lo sacan, etc.
      });
    }
  };

  // a todos los inputs le paso handleInputChange

  return (
    <div>
      <div>
        <div className={style.title}>
          <h2>Create Your Pokemon</h2>
        </div>
      </div>
      <div className={style.containerForm}>
        <div className={style.formDiv}>
          <form onSubmit={handleSubmit}>
            <div className={style.groupInputs}>
              <label className={style.inputsNames} htmlFor="name">
                Name:
              </label>
              <input
                className={style.input}
                type="text"
                value={input.name}
                name="name"
                onChange={(e) => handleInputChange(e)}
              />
              {errors.name && <p>{errors.name}</p>}
            </div>
            <div className={style.groupInputs}>
              <label htmlFor="life" className={style.inputsNames}>
                Life:
              </label>
              <input
                className={style.input}
                type="number"
                value={input.life}
                name="life"
                min="1"
                max="200"
                onChange={(e) => handleInputChange(e)}
              />
              {errors.life && <p>{errors.life}</p>}
            </div>
            <div className={style.groupInputs}>
              <label htmlFor="attack" className={style.inputsNames}>
                Attack:
              </label>
              <input
                className={style.input}
                type="number"
                value={input.attack}
                name="attack"
                min="1"
                max="200"
                onChange={(e) => handleInputChange(e)}
              />
              {errors.attack && <p>{errors.attack}</p>}
            </div>
            <div className={style.groupInputs}>
              <label htmlFor="defense" className={style.inputsNames}>
                Defense:
              </label>
              <input
                className={style.input}
                type="number"
                value={input.defense}
                name="defense"
                min="1"
                max="200"
                onChange={(e) => handleInputChange(e)}
              />
              {errors.defense && <p>{errors.defense}</p>}
            </div>
            <div className={style.groupInputs}>
              <label className={style.inputsNames}>Height:</label>
              <input
                className={style.input}
                type="number"
                value={input.height}
                name="height"
                min="0"
                max="400"
                onChange={(e) => handleInputChange(e)}
              />{" "}
              {errors.height && <p>{errors.height}</p>}
            </div>
            <div className={style.groupInputs}>
              <label htmlFor="weight" className={style.inputsNames}>
                Weight:
              </label>
              <input
                className={style.input}
                type="number"
                value={input.weight}
                name="weight"
                min="0"
                max="400"
                onChange={(e) => handleInputChange(e)}
              />{" "}
              {errors.weight && <p>{errors.weight}</p>}
            </div>
            <div className={style.groupInputs}>
              <label htmlFor="speed" className={style.inputsNames}>
                speed:
              </label>
              <input
                className={style.input}
                type="number"
                value={input.speed}
                name="speed"
                min="0"
                max="200"
                onChange={(e) => handleInputChange(e)}
              />{" "}
              {errors.speed && <p>{errors.speed}</p>}
            </div>

            <div className={style.groupInputs}>
              <label htmlFor="image" className={style.inputsNames}>
                Image:
              </label>
              <input
                className={style.input}
                type="text"
                value={input.image}
                name="image"
                onChange={handleInputChange}
              />
              {errors.image && <p>{errors.image}</p>}
            </div>
            <div className={style.groupInputs}>
              <label htmlFor="types" className={style.inputsNames}>
                types:
              </label>
              <select
                className={style.selectTypes}
                onChange={handlerSelect}
                disabled={input.types.length === 2}
              >
                <option value="">Select Type</option>
                {typesPokemon.map((t) => {
                  return (
                    <option
                      key={t.id}
                      value={t.name} /*accedo al nombre del type*/
                    >
                      {t.name}
                    </option>
                  );
                })}
              </select>{" "}
              {errors.types && <p>{errors.types}</p>}
            </div>

            <ul>
              <li>
                {
                  input.types.map(
                    (el) => el + " , "
                  ) /*renderiza todo lo que fue seleccionando*/
                }
              </li>
            </ul>
            <button type="submit" className={style.btnSubmit}>
              Create Pokemon
            </button>
          </form>
          {input.types.map((type, index) => (
            <div key={index}>
              <p> {type}</p>
              <button
                className={style.btnDelete}
                onClick={() => handlerDeleteTypes(type)}
              >
                X
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className={style.imgForm}>
        <img src={img} alt={"formimg"} />
      </div>
    </div>
  );
};

export default Form;
