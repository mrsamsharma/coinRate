/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateCategory } from '../redux/categories/categories';

const CategoryBox = (props) => {
  const coins = useSelector((state) => state.coinCounter);
  const dispatch = useDispatch();
  const {
    id, min, max,
  } = props;

  const countC = coins.filter((coin) => (
    coin.current_price <= max && coin.current_price >= min
  ));

  return (
    <NavLink className="category-box" onClick={() => dispatch(updateCategory({ min, max }))} onKeyDown={() => dispatch(updateCategory({ min, max }))} role="presentation" to="/Coins">
      <NavLink id={id} onClick={() => dispatch(updateCategory({ min, max }))} className="forward-btn" to="/Coins" />
      <i className="bitcoin-tag" />
      <p className="coin-name">
        Cryptocurrencies from $
        {min}
        -
        $
        {max}
      </p>
      <p className="coins-length">{countC.length}</p>
    </NavLink>
  );
};

export default CategoryBox;

CategoryBox.propTypes = {
  min: PropTypes.string.isRequired,
  max: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
