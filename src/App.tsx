import * as React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Feed from "./Feed";
import HandInputForm from "./HandInputForm";
import HandViewer from "./HandViewer";
import { Provider } from "react-redux"; // Import Provider from Redux
import store from "./redux/store"; // Import your Redux store

import { PokerHand } from "./types/types";

const App: React.FC = () => {
  const [pokerHands, setPokerHands] = useState<PokerHand[]>([]);

  const addNewHand = (newHand: PokerHand) => {
    setPokerHands((prevHands) => [...prevHands, newHand]);
  };

  return (
    <Router>
      <div>
        <h1>Poker Hand Sharing App</h1>
        <Routes>
          <Route
            path="/"
            element={
              <Feed pokerHands={pokerHands} setPokerHands={setPokerHands} />
            }
          />
          <Route
            path="/add-hand"
            element={
              <HandInputForm
                setPokerHands={setPokerHands}
                addNewHand={addNewHand}
              />
            } // Pass addNewHand
          />
          <Route
            path="/hand/:id"
            element={<HandViewer pokerHands={pokerHands} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
