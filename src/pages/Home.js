import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCoins } from '../redux/home/home';

const Home = () => {
  const coins = useSelector((state) => state.cryptoCoins);
  const dispatch = useDispatch();

  useEffect(() => {
    if (coins.length === 0) {
      dispatch(fetchCoins());
    }
  }, [dispatch, coins.length]);

  return (
    <></>
  );
};

export default Home;
