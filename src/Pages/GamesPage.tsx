import useFetchGames from "../hooks/useFetchGames";

const GamesPage = () => {
  const { games, loading } = useFetchGames();

  if (loading) {
    return <>Loading</>;
  }

  return (
    <div className="h-full">
      <ul className="h-full overflow-y-auto">
        {games?.map((value, index) => (
          <li key={index} className="text-base-content m-2">
            <div className="flex">
              {/* <img
                src={`https://media.steampowered.com/steamcommunity/public/images/apps/${value.appid}/${value.img_icon_url}.jpg`}
              /> */}
              <p>{value.name}</p>
              <img
                src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${value.appid}/library_600x900.jpg`}
              />
            </div>
            <a href={`steam://run/${value.appid}`} className="btn btn-primary">
              Launch Game
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GamesPage;
