import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchDetailCoin } from '../redux/detail/detail';

const Detail = () => {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const coins = useSelector((state) => state.cryptoCoins);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDetailCoin(id))
      .then(() => setLoading(false));
  }, [dispatch, coins, id, loading]);

  const details = useSelector((state) => state.detailsReducer);
  return (
    <div>
      {loading && (<i className="loading-gif" />)}
      {!loading && (
      <div className="details-wrapper">
        <img src={details.image.large} alt="Coin-Icon" className="coin-icon" />
        <h1 className="detail-name">{details.name}</h1>
        <div className="details-container">
          <h2>
            Symbol:&nbsp;
            {details.symbol}
          </h2>
          <h2>
            Highest in 24 Hours:
            $
            {details.market_data.high_24h.usd}
          </h2>
          <h2>
            Lowest in 24 Hours:
            $
            {details.market_data.low_24h.usd}
          </h2>
          <h2>
            Current Price:
            $
            {Number(details.market_data.current_price.usd).toFixed(3)}
          </h2>
          <h2>
            24 Hours Price Change:&nbsp;
            <span style={
              {
                color:
                Number(details.market_data.price_change_percentage_24h)
                < 0 ? '#ffa0a0' : '#21dd40',
              }
              }
            >
              {Number(details.market_data.price_change_percentage_24h).toFixed(2)}
              %
            </span>
          </h2>
        </div>
      </div>
      )}
    </div>
  );
};

export default Detail;
