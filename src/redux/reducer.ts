// redux/reducer.ts
import { createReducer } from '@reduxjs/toolkit';
import { addPokerHand } from './actions';

interface PokerHand {
  id: number;
  type: string;
  players: number;
  description: string;
}

interface State {
  pokerHands: PokerHand[];
}

const initialState: State = {
  pokerHands: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(addPokerHand, (state, action) => {
    state.pokerHands.push(action.payload);
  });
});

export default reducer;
