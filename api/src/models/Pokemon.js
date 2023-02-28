const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "pokemon",
    {
      id: {
        type: DataTypes.UUID, // uso UUID para que no se pise con el de la Api si creo otro.
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4, // hs enos hace mas facil identificar cual viene de la db.
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      life: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      attack: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      defense: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      speed: {
        type: DataTypes.INTEGER,
      },

      height: {
        type: DataTypes.INTEGER,
      },

      weight: {
        type: DataTypes.INTEGER,
      },
      image: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      createinDb: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      timestamps: false,
    }
  );
};
