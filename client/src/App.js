import SurveyPage from "./routes/surveyPage/surveyPage.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Done from "./routes/donePage/donePage.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/survey" element={<SurveyPage />} />
        <Route path="/done" element={<Done id={1} />} />
      </Route>
    </Routes>
  );
}

export default App;
