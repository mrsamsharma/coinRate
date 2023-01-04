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
    range, id, min, max,
  } = props;

  const countC = coins.filter((coin) => (
    coin.current_price <= max && coin.current_price >= min
  ));

  return (
    <div className="category-box">
      <h2>Cryptocurrencies</h2>
      <p>{range}</p>
      <NavLink id={id} onClick={() => dispatch(updateCategory({ min, max }))} className="forward-btn" to="/Coins" />
      <i className="coin" />
      <p>{countC.length}</p>
    </div>
  );
};

export default CategoryBox;

CategoryBox.propTypes = {
  range: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
