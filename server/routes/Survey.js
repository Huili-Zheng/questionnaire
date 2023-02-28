const express = require("express");
const router = express.Router();
const { WhoForms } = require("../models");

router.get("/", async (req, res) => {
  const answers = await WhoForms.findAll();
  res.json(answers);
});

router.post("/survey", async (req, res) => {
  try {
    const surveyData = req.body.survey.survey;

    surveyData.uid = 1;
    surveyData.status = 1;

    surveyData.timepoint = req.body.week;

    surveyData.created_timestamp = Math.floor(Date.now() / 1000);

    await WhoForms.create(surveyData);
    console.log(surveyData);
    res.status(200).json({ message: "Survey data inserted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error inserting survey data" });
  }
});

module.exports = router;
