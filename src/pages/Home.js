import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoins } from '../redux/app/app';
import CategoryBox from '../components/CategoryBox';
import { updateCategory } from '../redux/categories/categories';

const Home = () => {
  const categories = [
    {
      id: '1', min: '0', max: '10',
    },
    {
      id: '2', min: '10', max: '100',
    },
    {
      id: '3', min: '100', max: '1000',
    },
    {
      id: '4', min: '1000', max: '20000',
    },
  ];

  const coins = useSelector((state) => state.coinCounter);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);

  return (
    <div>
      <div className="coins-category-box">
        <i className="coin" />
        <p className="coin-name-home">
          Welcome to coinRate
          |
          Live Crypto Prices
        </p>
        <p className="coins-length">
          {coins.length}
          &nbsp;
          Coins
        </p>
        <select onChange={(e) => {
          dispatch(updateCategory({ min: e.target.value.split('-')[0], max: e.target.value.split('-')[1] }));
          navigate('/coins');
        }}
        >
          <option aria-label="$1-$10" defaultValue="Choose Price Category" disabled selected>Choose Price Category</option>
          {categories.map((category) => (
            <option key={category.id} aria-label={`$${category.min}-$${category.max}`} value={`${category.min}-${category.max}`}>{`$${category.min}-$${category.max}`}</option>
          ))}
        </select>
      </div>
      <p className="coin-heading">Stats by price</p>
      <div className="category-grid">
        {categories.map((category) => (
          <CategoryBox
            key={category.id}
            range={category.range}
            id={category.id}
            max={category.max}
            min={category.min}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
