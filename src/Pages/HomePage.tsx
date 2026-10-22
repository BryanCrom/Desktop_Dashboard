import GamesPage from "./GamesPage";

const HomePage = () => {
  return (
    <div role="tablist" className="flex h-full flex-col">
      <div className="tabs tabs-lift flex h-full shrink-0 rounded-xl p-4">
        <input
          type="radio"
          name="home_tabs"
          className="tab"
          aria-label="Games"
        />
        <div className="tab-content bg-base-100 p-4">
          <GamesPage />
        </div>
        <input
          type="radio"
          name="home_tabs"
          className="tab"
          aria-label="Work"
        />
        <div className="tab-content bg-base-100 p-4">
          <></>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
