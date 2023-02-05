const express = require("express");
const cors = require("cors");

const app = express();

const db = require("./models");

const formRouter = require("./routes/Forms");

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/", formRouter);
app.use(express.json());

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
