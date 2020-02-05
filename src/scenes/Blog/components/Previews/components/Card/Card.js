import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

import styles from './Card.module.scss';

const getDateEntries = date => {
  if (!date) {
    return ['Jan', '01'];
  }
  const datePartial = date.split(',')[0];
  const dateEntries = datePartial.split(' ');

  return dateEntries;
};

const Card = ({ title, slug, featured_media, date }) => {
  const image = featured_media.localFile.childImageSharp;
  const [month, day] = getDateEntries(date);
  const link = `/blog/${slug}`;

  return (
    <article className={styles.container}>
      <div className={styles.date}>
        <div>{day}</div>
        <div>{month}</div>
      </div>
      <a href={link} className={styles.link}>
        {image ? (
          <div>
            <Img fluid={image.fluid} />
          </div>
        ) : (
          <img src={featured_media.source_url} />
        )}
      </a>
      <h3 className={styles.title}>
        <a href={link}>{title}</a>
      </h3>
    </article>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  slug: PropTypes.string,
  date: PropTypes.string,
  featured_media: PropTypes.object,
};

export default Card;