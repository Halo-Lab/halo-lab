import React from 'react';
import PropTypes from 'prop-types';

import './Item.scss';

const Item = ({ stars, clutch, rating }) => {
  return (
    <div className="testimonials__item">
      <div className="testimonials__item-body">
        <div className="testimonials__item-header">
          <span>5.0</span>
          <img src={stars.url} alt={stars.name} />
        </div>
        <div className="testimonials__item-text">
          &#34;They perfectly met my expectations — working with them felt like
          an extension of my in-house team.&#34;
        </div>
        <div className="testimonials__item-author">
          — Alexander Kozma Ingal, Room Six
        </div>
      </div>
      <a href="#" className="testimonials__item-footer">
        <div className="testimonials__item-author">
          <img src={clutch.url} alt={clutch.name} />
          <span>— Alexander Kozma Ingal, Room Six</span>
        </div>
        <div className="testimonials__item-logo">
          <img src={rating.url} alt={rating.name} />
        </div>
      </a>
    </div>
  );
};

Item.propTypes = {
  stars: PropTypes.exact({ url: PropTypes.string, name: PropTypes.string }),
  clutch: PropTypes.exact({ url: PropTypes.string, name: PropTypes.string }),
  rating: PropTypes.exact({ url: PropTypes.string, name: PropTypes.string }),
};

export default Item;
