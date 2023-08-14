// HandViewer.tsx

import React from "react";
import { useParams, Link } from "react-router-dom";
import { PokerHand } from "./types/types";

interface HandViewerProps {
  pokerHands: PokerHand[];
}

const HandViewer: React.FC<HandViewerProps> = ({ pokerHands }) => {
  const { id } = useParams<{ id?: string }>();
  const handId = id ? parseInt(id, 10) : 0;

  const hand = pokerHands.find((hand) => hand.id === handId);

  if (!hand) {
    return <div>Hand not found</div>;
  }

  return (
    <div>
      <h2>Hand Viewer</h2>
      <p>Type: {hand.type}</p>
      {/* Display other hand properties */}
      <Link to="/">Back to Feed</Link>
    </div>
  );
};

export default HandViewer;
