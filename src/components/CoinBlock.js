import React from 'react';

const coinBlock = ({ coins }) => {
  const {
    name, symbol, priceUsd,
  } = coins;

  return (
    <div>
      <h1>{name}</h1>
      <h2>{symbol}</h2>
      <h2>{priceUsd}</h2>
    </div>
  );
};

export default coinBlock;
