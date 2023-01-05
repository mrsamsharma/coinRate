import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCoins } from '../redux/app/app';

import CategoryBox from '../components/CategoryBox';

const Home = () => {
  const categories = [
    {
      id: '1', range: '0 - 10', min: '0', max: '10',
    },
    {
      id: '2', range: '10 - 100', min: '10', max: '100',
    },
    {
      id: '3', range: '100 - 1000', min: '100', max: '1000',
    },
    {
      id: '4', range: '1000 - 20000', min: '1000', max: '20000',
    },
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);

  return (
    <div>
      <p>Stats by price</p>
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
