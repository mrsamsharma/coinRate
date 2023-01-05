/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';

const Detail = () => {
  const details = useSelector((state) => state.detailsReducer);

  return (
    <div>
      <div className="details-wrapper">
        <img src={details.image} alt="Coin-Icon" className="coin-icon" />
        <h1>{details.name}</h1>
        <h2>
          Symbol:&nbsp;
          {details.symbol}
        </h2>
        <h2>
          Highest in 24 Hours:
          $
          {details.high_24h}
        </h2>
        <h2>
          Lowest in 24 Hours:
          $
          {details.low_24h}
        </h2>
        <h2>
          Current Price:
          $
          {Number(details.current_price).toFixed(3)}
        </h2>
        <h2>
          24 Hours Price Change:&nbsp;
          {Number(details.price_change_percentage_24h).toFixed(2)}
          %
        </h2>
      </div>
    </div>
  );
};

export default Detail;
