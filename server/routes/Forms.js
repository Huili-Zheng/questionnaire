const express = require("express");
const router = express.Router();
const { WhoForms } = require("../models");

router.get("/", async (req, res) => {
  //   res.render("forms/index");
  const answers = await WhoForms.findAll();
  res.json(answers);
});

// router.get("/:id", async (req, res) => {
//   res.json("Hello!");
//   const answers = await WhoForms.findByPk(req.params.id);
//   console.log(answers);
//   res.render("forms/show", { answers });
// });

router.post("/", async (req, res) => {
  const answers = req.body;
  await WhoForms.create(answers);
  res.json(answers);
});

module.exports = router;
