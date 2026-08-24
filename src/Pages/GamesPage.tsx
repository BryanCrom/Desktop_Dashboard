import { useEffect, useState } from "react";
import { fetch } from "@tauri-apps/plugin-http";

interface SteamOwnedGamesData {
  response: {
    game_count: number;
    games: SteamGame[];
  };
}

interface SteamGame {
  name: string;
  img_icon_url: string;
}

const GamesPage = () => {
  const [games, setGames] = useState<SteamGame[]>();

  useEffect(() => {
    const fetchSteamGames = async () => {
      try {
        const response = await fetch(
          `https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${import.meta.env.VITE_STEAM_API_KEY}&steamid=76561198282312243&format=json&include_appinfo=true&appids_filter[0]=250900`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          },
        );

        if (!response.ok) {
          console.error("Error fetching steam games:", response);
        } else {
          const data: SteamOwnedGamesData = await response.json();
          console.log(data.response.games);
          setGames(data.response.games);
        }
      } catch (error) {
        console.error("fetchSteamGames Unexpected Error: ", error);
      }
    };

    fetchSteamGames();
  }, []);

  return (
    <div>
      <ul>
        {games?.map((value, index) => (
          <li key={index}>{value.name}</li>
        ))}
      </ul>
      <a href="steam://run/250900">Launch Game</a>
    </div>
  );
};

export default GamesPage;
