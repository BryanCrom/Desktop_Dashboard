import { useEffect, useState } from "react";
import { SteamGame, SteamOwnedGamesData } from "../types/steamTypes";
import { fetch } from "@tauri-apps/plugin-http";

const useFetchGames = () => {
  const [games, setGames] = useState<SteamGame[]>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchSteamGames = async () => {
      setLoading(true);

      try {
        const response = await fetch(
          `https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${import.meta.env.VITE_STEAM_API_KEY}&steamid=76561198282312243&format=json&include_appinfo=true`,
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
      } finally {
        setLoading(false);
      }
    };

    fetchSteamGames();
  }, []);

  return { games, loading };
};

export default useFetchGames;
