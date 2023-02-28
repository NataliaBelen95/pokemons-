const axios = require("axios");
const { Router } = require("express");
const { Type } = require("../db.js");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const apiResponse = await axios.get("https://pokeapi.co/api/v2/type");
    const types = apiResponse.data.results.map((result) => result.name);

    for (const type of types) {
      await Type.findOrCreate({ where: { name: type } });
    }

    const allTypes = await Type.findAll();
    res.send(allTypes);
  } catch (error) {
    console.error(error);
    res.status(500).send("error");
  }
});

/*router.get("/", async (_req, res) => {
  try {
    const api = await axios.get("https://pokeapi.co/api/v2/type"); //Trae todos los tipos de Pokemon.
    const types = await api.data; // trae la respuesta en data
    for (type of types.results) {
      //Entra a la propiedad results, en cada elemento.
      const find = await Type.findOne({ where: { name: type.name } }); // Entra a la propiedad name y busco si ya existe.
      if (!find) {
        // Si no lo encuentra.
        await Type.create({ name: type.name }); //Lo agrega a la base de datos
      } else {
        return res.json(await Type.findAll()); // Sino devuelve todos los tipos de Pokemon.
      }
    }
    res.json(await Type.findAll()); //Devuelvo todos los tipos de la Base de Datos.
  } catch (error) {
    return { error: error.message };
  }
});*/
//////////para que devuelva en array
/* try {
    const apiResponse = await axios.get("https://pokeapi.co/api/v2/type");
    const types = [];

    for (let i = 0; i < apiResponse.data.results.length; i++) {
      types.push(apiResponse.data.results[i].name); //accedo al nombre del tipo directamente en cada iteración utilizando el índice del array y la propiedad name del objeto correspondiente.
      await Type.findOrCreate({
        where: { name: apiResponse.data.results[i].name },
      });
    }

    res.send(types);
  } catch (error) {
    console.error(error);
    res.status(500).send("error");
  }
});*/

module.exports = router;
