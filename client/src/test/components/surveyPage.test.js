import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import SurveyPage from "../../routes/surveyPage/surveyPage.component";
import axios from "axios";
import { act } from "react-dom/test-utils";

configure({ adapter: new Adapter() });

jest.mock("axios");

describe("SurveyPage component", () => {
  let wrapper;
  const week = 1;

  beforeEach(() => {
    wrapper = shallow(<SurveyPage week={week} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
    const originalAlert = window.alert;
    window.alert = originalAlert;
  });

  it("renders the survey name with the correct week number", () => {
    expect(wrapper.find(".surveyName").text()).toEqual(
      "Week 1 WHO-5 Well-Being Index"
    );
  });

  it("renders a Survey component when not submitted", () => {
    expect(wrapper.find("Survey").exists()).toEqual(true);
    expect(wrapper.find("Done").exists()).toEqual(false);
  });

  it("renders a Done component when submitted", () => {
    window.alert = () => {};
    wrapper
      .find("Survey")
      .prop("model")
      .onComplete.fire({ data: { q1: 5, q2: 4, q3: 3, q4: 2, q5: 1 } }, {});
    wrapper.update();
    expect(wrapper.find("Survey").exists()).toEqual(false);
    expect(wrapper.find("Done").exists()).toEqual(true);
  });

  it("should submit survey data on completion", async () => {
    window.alert = () => {};
    const survey = wrapper.find("Survey").dive().instance().survey;
    const mockSurveyData = { q1: 5, q2: 4, q3: 3, q4: 2, q5: 1 };
    survey.data = mockSurveyData;

    const postSpy = jest.spyOn(axios, "post");

    await survey.doComplete();
    wrapper.update();

    expect(postSpy).toHaveBeenCalledWith("http://localhost:3001/survey", {
      survey: mockSurveyData,
      week: week,
    });
    expect(wrapper.find("Done").prop("submittedSurvey")).toEqual(
      mockSurveyData
    );
  });

  it("alert is called on survey submission", async () => {
    window.alert = jest.fn();

    // Submit the survey
    const survey = wrapper.find("Survey").dive().instance().survey;
    await act(async () => {
      survey.doComplete();
    });

    // Check that the alert function was called
    expect(window.alert).toHaveBeenCalledWith(
      "Thank you for completing the questionnaire!"
    );

    // Restore the original alert function
  });
});
