import { Outlet } from "react-router-dom";
import "./home.styles.scss";
const Home = () => {
  return (
    <div>
      <Outlet />
      <h1 className="welcome">Hi, Welcome to the Survey Center</h1>
    </div>
  );
};

export default Home;
