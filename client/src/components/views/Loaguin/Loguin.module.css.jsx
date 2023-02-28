/*import { useState } from "react";
import validation from "./validation";
import style from "../Loaguin/Loguin.module.css";

const Loaguin = ({ login }) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validation({
        ...userData,
        [event.target.value]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={style.form}>
       
        <input
          name="username"
          type="text"
          onChange={handleInputChange}
          value={userData.username}
          className={style.input}
          placeholder="user"
        />
        {errors.username && <p className={style.error}>{errors.username}</p>}
        <br></br>
        
        <input
          name="password"
          type="password"
          onChange={handleInputChange}
          value={userData.password}
          className={style.input}
          placeholder="password"
        />
        {errors.password && <p className={style.error}>{errors.password}</p>}
        <button type="submit" className={style.botoncito}>
          Login
        </button>
      </form>
    </div>
  );
};
*/
