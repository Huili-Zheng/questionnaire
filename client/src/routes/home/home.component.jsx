import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Outlet />
      <h1>Hi, Welcome to the Suvery Center</h1>
    </div>
  );
};

export default Home;
