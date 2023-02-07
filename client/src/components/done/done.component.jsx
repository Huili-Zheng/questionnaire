import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { json } from "../surveyJson/json.component";

function Done({ submittedSurvey }) {
  const newSurvey = new Model(json);
  newSurvey.onComplete.add((sender, options) => {
    console.log(JSON.stringify(sender.data, null, 3));
  });
  newSurvey.data = {
    survey: { ...submittedSurvey.survey },
  };
  newSurvey.mode = "display";

  return (
    <div>
      <Survey model={newSurvey} />
    </div>
  );
}

export default Done;
