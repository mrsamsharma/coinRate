import React from 'react';

const coinBlock = ({ coins }) => {
  const {
    // eslint-disable-next-line camelcase
    name, symbol, current_price,
  } = coins;

  return (
    <div>
      <h1>{name}</h1>
      <h2>{symbol}</h2>
      <h2>
        $
        {Number(current_price).toFixed(3)}
      </h2>
    </div>
  );
};

export default coinBlock;
