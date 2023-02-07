const express = require("express");
const router = express.Router();
const { WhoForms } = require("../models");

router.get("/", async (req, res) => {
  const answers = await WhoForms.findAll();
  res.json(answers);
});

router.post("/survey", async (req, res) => {
  const surveyData = req.body.survey.survey;
  surveyData.uid = 1;
  surveyData.status = 1;

  surveyData.timepoint = 2;

  surveyData.created_timestamp = Math.floor(Date.now() / 1000);

  await WhoForms.create(surveyData);
  console.log(surveyData);
});

module.exports = router;
