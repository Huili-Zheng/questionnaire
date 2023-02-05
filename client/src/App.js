import SuveryPage from "./routes/suveryPage/suveryPage.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
const Done = () => {
  return <h1>I am the done page</h1>;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/suvery" element={<SuveryPage />} />
        <Route path="/done" element={<Done />} />
      </Route>
    </Routes>
  );
}

export default App;
