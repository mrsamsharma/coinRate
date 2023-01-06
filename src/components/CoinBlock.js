import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const CoinBlock = ({ coin }) => {
  const {
    // eslint-disable-next-line camelcase
    id, name, current_price,
  } = coin;

  return (
    <div className="coin-box">
      <h1 className="coin-box-heading">{name}</h1>
      <div className="coin-price-wrapper">
        <h3>
          $
          {Number(current_price).toFixed(3)}
        </h3>
        <NavLink id={id} className="forward-btn-coin" to={`/detail/${id}`} />
      </div>
    </div>
  );
};

export default CoinBlock;

CoinBlock.propTypes = {
  coin: PropTypes.shape({
    symbol: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    current_price: PropTypes.number.isRequired,
  }).isRequired,
};
