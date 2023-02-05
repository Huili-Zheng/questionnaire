import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <h1>h1</h1>
      <span>
        <Link to="/surveyex">SurveyEx</Link>&nbsp;
        <Link to="/surveysdone">SurveysDone</Link>
      </span>
    </div>
  );
};

export default NavBar;
