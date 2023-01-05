import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CoinBlock from '../components/CoinBlock';
import { fetchCoins, filterCoins } from '../redux/home/home';

const Coins = () => {
  const coins = useSelector((state) => state.cryptoCoins);
  const dispatch = useDispatch();
  const category = useSelector((state) => state.activeCategories);

  useEffect(() => {
    dispatch(fetchCoins()).then(() => dispatch(filterCoins(category)));
  }, [dispatch, category]);

  return (
    <div>
      <p>CyptoCurrencies Price Breakdown</p>
      {coins.map((coin) => (
        <CoinBlock
          key={coin.id}
          coin={coin}
        />
      ))}
    </div>
  );
};

export default Coins;
