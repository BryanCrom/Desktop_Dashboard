import { Link } from "react-router";

const HomePage = () => {
  return (
    <main>
      <Link to="/games" className="rounded-2xl bg-amber-50 p-5 outline">
        Games
      </Link>
    </main>
  );
};

export default HomePage;
