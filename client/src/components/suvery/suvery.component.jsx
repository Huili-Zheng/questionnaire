import Question from "../question/question.component";
const Suvery = ({ questions }) => {
  return (
    <div className="Suvery-container">
      {questions.map((question) => (
        <Question key={question.id} question={question} />
      ))}
    </div>
  );
};

export default Suvery;
