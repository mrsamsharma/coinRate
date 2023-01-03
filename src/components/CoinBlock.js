import React from 'react';

const coinBlock = ({ coin }) => {
  const {
    id, name, symbol, priceUsd,
  } = coin;

  return (
    <div>
      <h1 id={id}>{name}</h1>
      <h2>{symbol}</h2>
      <h2>{priceUsd}</h2>
    </div>
  );
};

export default coinBlock;
