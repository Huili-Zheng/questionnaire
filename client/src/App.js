import SuveryForm from "./components/Suvery.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";

const Done = () => {
  return <h1>I am the done page</h1>;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<SuveryForm />} />
        <Route path="/done" element={<Done />} />
      </Route>
    </Routes>
  );
}

export default App;
