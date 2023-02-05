const express = require("express");
const app = express();

const db = require("./models");

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server runing on port 3001");
  });
});

db.Users.hasMany(db.WhoForms, {
  foreignKey: "uid",
  as: "WhoForms",
  onDelete: "cascade",
});
