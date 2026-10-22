import HomePage from "./pages/HomePage";
import GamesPage from "./pages/GamesPage";

import { HashRouter, Route, Routes } from "react-router";

import "./App.css";

function App() {
  return (
    <div className="bg-base-300 h-screen">
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/games" element={<GamesPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
