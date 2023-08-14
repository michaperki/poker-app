import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

import { PokerHand } from "./types/types";

interface HandInputFormProps {
  setPokerHands: React.Dispatch<React.SetStateAction<PokerHand[]>>;
  addNewHand: (newHand: PokerHand) => void;
}

interface FormData {
  type: string;
  // Define other properties here
}

const HandInputForm: React.FC<HandInputFormProps> = ({
  setPokerHands,
  addNewHand,
}) => {
  const [formData, setFormData] = useState<FormData>({
    type: "",
    // Initialize other properties here
  });

  const navigate = useNavigate(); // Use the useNavigate hook

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newHand: PokerHand = {
      id: Date.now(),
      type: formData.type,
      players: 0,
      description: "",
      // Initialize other properties
    };
    addNewHand(newHand); // Use the addNewHand function from props
    navigate("/"); // Navigate back to the Feed component
  };

  return (
    <div>
      <h2>Hand Input Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="type"
          value={formData.type}
          onChange={handleInputChange}
          placeholder="Type"
        />
        {/* Add more input fields */}
        <button type="submit">Submit</button>
        <Link to="/">Back to Feed</Link> {/* You can also use a Link to navigate back */}
      </form>
    </div>
  );
};

export default HandInputForm;
