const express = require("express");
const router = express.Router();
const { WhoForms } = require("../models");

router.get("/", async (req, res) => {
  //   res.render("forms/index");
  const answers = await WhoForms.findAll();
  res.json(answers);
});

// router.get("/survey/:id", async (req, res) => {
//   const id = req.params.id;
//   const form = await WhoForms.findByPk(id);
//   if (!form) {
//     return res.status(404).json({ error: "Form not found" });
//   }
//   res.json(form);
//   console.log(form);
// });

router.post("/survey", async (req, res) => {
  const surveyData = req.body.survey;
  surveyData.uid = 1;
  surveyData.status = 1;
  surveyData.timepoint = 100;
  surveyData.created_timestamp = 100;

  await WhoForms.create(surveyData);
  console.log(surveyData);
});

module.exports = router;
