import "./surveyPage.styles.scss";
import React, { useState } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import Choices from "../../components/choices/choices.component";
import Questions from "../../components/questions/questions.component";
import Axios from "axios";

const SurveyPage = () => {
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
  survey.onComplete.add((sender, options) => {
    Axios.post("http://localhost:3001/survey", sender.data)
      .then((response) => {
        console.log("response:", response.data);
      })
      .catch((error) => {
        console.error("error:", error);
      });
  });
  return (
    <div>
      <h1 className="surveyName">Week 2 WHO-5 Well-Being Index</h1>
      <Survey model={survey} />
    </div>
  );
};

export default SurveyPage;
