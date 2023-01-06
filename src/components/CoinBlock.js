import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { detailCoin } from '../redux/detail/detail';

const CoinBlock = ({ coin }) => {
  const {
    // eslint-disable-next-line camelcase
    id, name, current_price,
  } = coin;

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(detailCoin(coin));
  };

  return (
    <div className="coin-box">
      <h1 className="coin-box-heading">{name}</h1>
      <div className="coin-price-wrapper">
        <h3>
          $
          {Number(current_price).toFixed(3)}
        </h3>
        <NavLink id={id} className="forward-btn-coin" to="/Detail" onClick={handleClick} />
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
