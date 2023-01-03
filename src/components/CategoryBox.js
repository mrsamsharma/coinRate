import React from 'react';
import PropTypes from 'prop-types';

const CategoryBox = (props) => {
  const {
    range,
  } = props;
  return (
    <div>
      <h2>Cryptocurrencies</h2>
      <p>{range}</p>
    </div>
  );
};

export default CategoryBox;

CategoryBox.propTypes = {
  range: PropTypes.string.isRequired,
};
