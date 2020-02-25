import React from 'react';
import PropTypes from 'prop-types';

import './Item.scss';

const Item = ({ author, companyLogo, rating, text, stars, clutch }) => {
  return (
    <div className="testimonials__item">
      <div className="testimonials__item-body">
        <div className="testimonials__item-header">
          <span>{rating}</span>
          <img src={stars.url} alt={stars.name} />
        </div>
        <div className="testimonials__item-text">&#34;{text}&#34;</div>
        <div className="testimonials__item-author">— {author}</div>
      </div>
      <a href="#" className="testimonials__item-footer">
        <div className="testimonials__item-author">
          <img src={clutch.url} alt={clutch.name} />
          <span>— {author}</span>
        </div>
        <div className="testimonials__item-logo">
          <img src={companyLogo.url} alt={companyLogo.name} />
        </div>
      </a>
    </div>
  );
};

Item.propTypes = {
  author: PropTypes.string,
  companyLogo: PropTypes.object,
  rating: PropTypes.string,
  text: PropTypes.string,
  // remove -->
  stars: PropTypes.object,
  clutch: PropTypes.object,
};

export default Item;
