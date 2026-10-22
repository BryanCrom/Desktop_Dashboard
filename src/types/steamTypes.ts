export interface SteamOwnedGamesData {
  response: {
    game_count: number;
    games: SteamGame[];
  };
}

export interface SteamGame {
  appid: number;
  name: string;
  img_icon_url: string;
}
