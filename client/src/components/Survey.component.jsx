import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const SurveyForm = () => {
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
    <div>
      <Outlet />
      <h1>Week 2 WHO-5 Well-Being Index</h1>
      <form onSubmit={() => {}}>
        <h3>I have felt cheerful and in good spirits</h3>
        <select
          name="question1"
          value={formData.question1}
          onChange={handleChange}>
          <option value="0">Select an option</option>
          <option value="1">All the time</option>
          <option value="2">Most of the time</option>
          <option value="3">More than half of the time</option>
          <option value="4">Less than half of the time</option>
          <option value="5">Some of the time</option>
          <option value="6">At no time</option>
        </select>
        <h3>I have felt calm and relaxed</h3>
        <select
          name="question2"
          value={formData.question2}
          onChange={handleChange}>
          <option value="0">Select an option</option>
          <option value="1">All the time</option>
          <option value="2">Most of the time</option>
          <option value="3">More than half of the time</option>
          <option value="4">Less than half of the time</option>
          <option value="5">Some of the time</option>
          <option value="6">At no time</option>
        </select>
        <h3>I have felt active and vigorous</h3>
        <select
          name="question3"
          value={formData.question3}
          onChange={handleChange}>
          <option value="0">Select an option</option>
          <option value="1">All the time</option>
          <option value="2">Most of the time</option>
          <option value="3">More than half of the time</option>
          <option value="4">Less than half of the time</option>
          <option value="5">Some of the time</option>
          <option value="6">At no time</option>
        </select>
        <h3>I wake up feeling fresh and rested</h3>
        <select
          name="question4"
          value={formData.question4}
          onChange={handleChange}>
          <option value="0">Select an option</option>
          <option value="1">All the time</option>
          <option value="2">Most of the time</option>
          <option value="3">More than half of the time</option>
          <option value="4">Less than half of the time</option>
          <option value="5">Some of the time</option>
          <option value="6">At no time</option>
        </select>
        <h3>My daily life has been filled with things that interest me</h3>
        <select
          name="question5"
          value={formData.question5}
          onChange={handleChange}>
          <option value="0">Select an option</option>
          <option value="1">All the time</option>
          <option value="2">Most of the time</option>
          <option value="3">More than half of the time</option>
          <option value="4">Less than half of the time</option>
          <option value="5">Some of the time</option>
          <option value="6">At no time</option>
        </select>
      </form>
      <button type="submit">Submit</button>
    </div>
  );
};

export default SurveyForm;
