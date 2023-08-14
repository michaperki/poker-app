import * as React from "react";
import { useState } from "react";

import HandInputForm from "./HandInputForm";
import HandViewer from "./HandViewer";
import { Link } from "react-router-dom";

interface PokerHand {
  id: number;
  type: string;
  players: number;
  description: string;
}

interface FeedProps {
  pokerHands: PokerHand[];
  setPokerHands: React.Dispatch<React.SetStateAction<PokerHand[]>>;
}

const Feed: React.FC<FeedProps> = ({ pokerHands, setPokerHands }) => {
  const [selectedHand, setSelectedHand] = useState<PokerHand | null>(null);

  const handleHandClick = (hand: PokerHand) => {
    setSelectedHand(hand);
  };

  return (
    <div>
      {pokerHands.map((hand) => (
        <li key={hand.id}>
          <Link to={`/hand/${hand.id}`}>{hand.type}</Link>
        </li>
      ))}

      <Link to="/add-hand">Add a Hand</Link>
    </div>
  );
};

export default Feed;
