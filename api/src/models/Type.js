const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "type",
    {
      id: {
        type: DataTypes.UUID, // uso UUID para que no se pise con el de la Api si creo otro.
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4, // se nos hace mas facil identificar cual viene de la db.
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
