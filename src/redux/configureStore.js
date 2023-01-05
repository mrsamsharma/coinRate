import { configureStore } from '@reduxjs/toolkit';
import cryptoCoins from './home/home';
import activeCategories from './categories/categories';
import coinCounter from './app/app';
import detailsReducer from './detail/detail';

const store = configureStore({
  reducer: {
    coinCounter,
    activeCategories,
    cryptoCoins,
    detailsReducer,
  },
});

export default store;
