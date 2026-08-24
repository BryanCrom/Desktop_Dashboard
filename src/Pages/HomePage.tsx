import { Link } from "react-router";

const HomePage = () => {
  return (
    <main>
      <Link to="/games" className="">
        Games
      </Link>
    </main>
  );
};

export default HomePage;
