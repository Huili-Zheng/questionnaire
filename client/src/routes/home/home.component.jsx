import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Outlet />
      <h1>Hi, Welcome to the Survey Center</h1>
    </div>
  );
};

export default Home;
