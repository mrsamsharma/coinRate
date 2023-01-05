import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { detailCoin } from '../redux/detail/detail';

const CoinBlock = ({ coin }) => {
  const {
    // eslint-disable-next-line camelcase
    id, name, symbol, current_price,
  } = coin;

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(detailCoin(coin));
  };

  return (
    <div className="category-box">
      <h1>{name}</h1>
      <h2>{symbol}</h2>
      <h2>
        $
        {Number(current_price).toFixed(3)}
      </h2>
      <NavLink id={id} className="forward-btn" to="/Detail" onClick={handleClick} />
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
