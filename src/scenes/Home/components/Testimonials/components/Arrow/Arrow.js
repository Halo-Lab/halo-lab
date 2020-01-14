import React from 'react';
import PropTypes from 'prop-types';

const Arrow = ({ myClass, className, style, onClick }) => {
  return (
    <button
      className={`${className} ${myClass}`}
      style={style}
      onClick={onClick}
    ></button>
  );
};

Arrow.propTypes = {
  myClass: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.string,
  onClick: PropTypes.func,
};

export default Arrow;
