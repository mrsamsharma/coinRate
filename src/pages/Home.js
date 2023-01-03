import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCoins } from '../redux/home/home';
import CoinBlock from '../components/CoinBlock';

const Home = () => {
  const coins = useSelector((state) => state.cryptoCoins);
  const dispatch = useDispatch();

  useEffect(() => {
    if (coins.length === 0) {
      dispatch(fetchCoins());
    }
  }, [dispatch, coins.length]);

  return (
    <div>
      {coins.map((coin) => (
        <CoinBlock
          key={coin.id}
          coins={coin}
        />
      ))}
    </div>
  );
};

export default Home;
