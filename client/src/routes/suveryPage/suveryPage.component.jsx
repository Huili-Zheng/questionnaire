import { Outlet } from "react-router-dom";

import Suvery from "../../components/suvery/suvery.component";

const SuveryPage = () => {
  const questions = [
    {
      id: 1,
      description: "I have felt cheerful and in good spirits",
    },
    {
      id: 2,
      description: "I have felt calm and relaxed",
    },
    {
      id: 3,
      description: "I have felt active and vigorous",
    },
    {
      id: 4,
      description: "I wake up feeling fresh and rested",
    },
    {
      id: 5,
      description: "My daily life has been filled with things that interest me",
    },
  ];

  return (
    <div>
      <Outlet />
      <h1>Week 2 WHO-5 Well-Being Index</h1>
      <form onSubmit={() => {}}>
        <Suvery questions={questions} />
      </form>
      <button type="submit">Submit</button>
    </div>
  );
};

export default SuveryPage;
