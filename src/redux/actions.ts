// redux/actions.ts
import { createAction } from '@reduxjs/toolkit';
import { PokerHand } from '../types/types';

export const addPokerHand = createAction<PokerHand>('ADD_POKER_HAND');
