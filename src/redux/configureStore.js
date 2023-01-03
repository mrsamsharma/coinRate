import { configureStore } from '@reduxjs/toolkit';
import cryptoCoins from './home/home';

const store = configureStore({
  reducer: {
    cryptoCoins,
  },
});

export default store;
