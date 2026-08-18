import { useEffect } from "react";
import { fetch } from "@tauri-apps/plugin-http";

const GamesPage = () => {
  useEffect(() => {
    const fetchSteamGames = async () => {
      try {
        const response = await fetch(
          `https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${import.meta.env.VITE_STEAM_API_KEY}&steamid=76561198282312243&format=json`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          },
        );

        if (!response.ok) {
          throw new Error(`Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error fetching steam games. " + error);
      }
    };

    fetchSteamGames();
  }, []);

  return <div>GamesPage</div>;
};

export default GamesPage;
