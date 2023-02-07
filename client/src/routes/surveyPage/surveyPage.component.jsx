import "./surveyPage.styles.scss";
import React, { useState } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import Choices from "../../components/choices/choices.component";
import Questions from "../../components/questions/questions.component";
import Axios from "axios";
import Done from "../../components/done/done.component";

const SurveyPage = ({ week }) => {
  const [submitted, setSubmitted] = useState(false);
  const [submittedSurvey, setSubmittedSurvey] = useState();

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
    setSubmittedSurvey(sender.data);
    setSubmitted(true);
    try {
      alert("Thank you for completing the questionnaire!");
      await Axios.post("http://localhost:3001/survey", {
        survey: sender.data,
        week: 2,
      });
    } catch (error) {
      console.error("error:", error);
    }
  });

  return (
    <div>
      <h1 className="surveyName">Week {week} WHO-5 Well-Being Index</h1>
      {submitted ? (
        <Done submittedSurvey={submittedSurvey} />
      ) : (
        <Survey model={survey} />
      )}
    </div>
  );
};
export default SurveyPage;
