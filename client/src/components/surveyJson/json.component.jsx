import Choices from "../choices/choices.component";
import Questions from "../questions/questions.component";
export const json = {
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
