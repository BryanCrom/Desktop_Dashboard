import HomePage from "./Pages/HomePage";
import GamesPage from "./Pages/GamesPage";

import { HashRouter, Route, Routes } from "react-router";

import "./App.css";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/games" element={<GamesPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
