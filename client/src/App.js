import SurveyPage from "./routes/surveyPage/surveyPage.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Done from "./components/done/done.component";

function App() {
  const week = 2;
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/survey" element={<SurveyPage week={week} />} />
        <Route path="/done" element={<Done week={week} />} />
      </Route>
    </Routes>
  );
}

export default App;
