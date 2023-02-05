import "./suveryPage.styles.scss";
import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import Choices from "../../components/choices/choices.component";
import Questions from "../../components/questions/questions.component";

const SuveryPage = () => {
  const json = {
    elements: [
      {
        type: "matrix",
        name: "index",
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
    console.log(JSON.stringify(sender.data, null, 3));
  });
  return (
    <div>
      <h1 className="suveryName">Week 2 WHO-5 Well-Being Index</h1>
      <Survey model={survey} />
    </div>
  );
};

export default SuveryPage;
