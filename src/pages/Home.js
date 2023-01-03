import React from 'react';
import CategoryBox from '../components/CategoryBox';

const Home = () => {
  const categories = [
    { id: '1', range: '0 - 10' },
    { id: '2', range: '10 - 100' },
    { id: '3', range: '100 - 1000' },
    { id: '4', range: '1000 - 20000' },
  ];

  return (
    <div>
      {categories.map((category) => (
        <CategoryBox
          key={category.id}
          range={category.range}
        />
      ))}
    </div>
  );
};

export default Home;
