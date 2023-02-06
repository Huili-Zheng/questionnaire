import React, { useContext } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { json } from "../../components/surveyJson/json.component";
import { SurveyContext } from "../../context/context.component";

function Done() {
  const { submittedData } = useContext(SurveyContext);
  if (!submittedData) {
    return <div>Please first finish the form</div>;
  }

  const { survey } = submittedData;

  const newSurvey = new Model(json);
  newSurvey.onComplete.add((sender, options) => {
    console.log(JSON.stringify(sender.data, null, 3));
  });
  newSurvey.data = {
    survey: {
      q1: survey["q1"],
      q2: survey["q2"],
      q3: survey["q3"],
      q4: survey["q4"],
      q5: survey["q5"],
    },
  };
  newSurvey.mode = "display";

  return (
    <div>
      <h1 className="surveyName">Week 2 WHO-5 Well-Being Index</h1>
      <Survey model={newSurvey} />
    </div>
  );
}

export default Done;
