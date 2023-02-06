import "./surveyPage.styles.scss";
import React, { useState, useContext } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import Choices from "../../components/choices/choices.component";
import Questions from "../../components/questions/questions.component";
import Axios from "axios";
import { SurveyContext } from "../../context/context.component";
const SurveyPage = () => {
  const { setSubmittedData } = useContext(SurveyContext);
  const json = {
    elements: [
      {
        type: "matrix",
        name: "survey",
        title: "Over the last two weeks",
        columns: Choices,
        rows: Questions,
        alternateRows: true,
        isAllRowRequired: true,
      },
    ],
    showQuestionNumbers: "off",
    completeText: "Submit",
  };

  const survey = new Model(json);
  survey.onComplete.add(async (sender, options) => {
    setSubmittedData(sender.data);
    try {
      alert("Thank you for completing the questionnaire!");
      await Axios.post("http://localhost:3001/survey", sender.data);
    } catch (error) {
      console.error("error:", error);
    }
  });

  return (
    <div>
      <h1 className="surveyName">Week 2 WHO-5 Well-Being Index</h1>
      <Survey model={survey} />
    </div>
  );
};
export default SurveyPage;
