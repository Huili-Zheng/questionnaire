import React, { useState } from "react";

const Question = ({ question }) => {
  const { id, description } = question;
  const [formData, setFormData] = useState({
    question1: 0,
    question2: 0,
    question3: 0,
    question4: 0,
    question5: 0,
  });
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.selectedIndex,
    });
  };

  return (
    <div className="question-container">
      <h2>{description}</h2>
      <select
        required
        name={`question${id}`}
        value={formData[`question${id}`]}
        onChange={handleChange}>
        <option value="0">Select an option</option>
        <option value="1">All the time</option>
        <option value="2">Most of the time</option>
        <option value="3">More than half of the time</option>
        <option value="4">Less than half of the time</option>
        <option value="5">Some of the time</option>
        <option value="6">At no time</option>
      </select>
    </div>
  );
};

export default Question;
