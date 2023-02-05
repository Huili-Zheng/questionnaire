const Users = require("./Users");

module.exports = (sequelize, DataTypes) => {
  const WhoForms = sequelize.define(
    "WhoForms",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      uid: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      timepoint: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      q1: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      q2: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      q3: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      q4: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      q5: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      created_timestamp: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );

  return WhoForms;
};
