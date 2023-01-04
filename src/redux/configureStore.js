import { configureStore } from '@reduxjs/toolkit';
import cryptoCoins from './home/home';
import activeCategories from './categories/categories';
import coinCounter from './app/app';

const store = configureStore({
  reducer: {
    cryptoCoins,
    activeCategories,
    coinCounter,
  },
});

export default store;
