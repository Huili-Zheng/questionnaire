const express = require("express");
const router = express.Router();
const { WhoForms } = require("../models");

router.get("/", async (req, res) => {
  const answers = await WhoForms.findAll();
  res.json(answers);
});

router.post("/survey", async (req, res) => {
  const surveyData = req.body.survey;
  surveyData.uid = 1;
  surveyData.status = 1;
  // Query the database to get the latest submission count for this user
  const latestSubmission = await WhoForms.findOne({
    where: { uid: surveyData.uid },
    order: [["created_timestamp", "DESC"]],
  });

  // Increment the submission count
  surveyData.timepoint = latestSubmission ? latestSubmission.timepoint + 1 : 1;

  surveyData.created_timestamp = Math.floor(Date.now() / 1000);

  await WhoForms.create(surveyData);
  console.log(surveyData);
});

module.exports = router;
