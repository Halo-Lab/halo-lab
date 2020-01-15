import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import './Item.scss';

const Item = ({ image, title, date, link }) => {
  return (
    <div className="section__post-item">
      <div className="section__post-img">
        <Link to={link}>
          <img src={image} alt="preview" />
        </Link>
      </div>
      <div className="section__post-info">
        <div className="section__post-date">{date}</div>
        <h3 className="section__post-title">
          <Link to={link}>{title}</Link>
        </h3>
      </div>
    </div>
  );
};

Item.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  link: PropTypes.string,
};

export default Item;
