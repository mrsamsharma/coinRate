import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getCoins = (payload) => ({ type: 'GET', payload });

export const url = 'https://api.coincap.io/v2/assets';

const initialState = [];

export const fetchCoins = createAsyncThunk(
  'home/fetchCoins',
  async (_, { dispatch }) => {
    const res = await axios.get(url);
    const coins = res.data.data;
    dispatch(getCoins(coins));
  },
);

const coinsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET':
      return action.payload;
    default:
      return state;
  }
};

export default coinsReducer;
