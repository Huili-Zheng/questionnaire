import React, { useState } from "react";

export const SurveyContext = React.createContext({
  submittedData: null,
  setSubmittedData: () => null,
});

export const SurveyProvider = ({ children }) => {
  const [submittedData, setSubmittedData] = useState(null);
  const value = { submittedData, setSubmittedData };
  return (
    <SurveyContext.Provider value={value}>{children}</SurveyContext.Provider>
  );
};
