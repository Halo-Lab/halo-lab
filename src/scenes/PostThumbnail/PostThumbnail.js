import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

import styles from './PostThumbnail.module.scss';

const getDateEntries = date => {
  if (!date) {
    return ['Jan', '01'];
  }
  const datePartial = date.split(',')[0];
  const dateEntries = datePartial.split(' ');

  return dateEntries;
};

const PostThumbnail = ({ title, slug, featured_media, date }) => {
  const imageSource = featured_media.source_url;
  const imageOptimized =
    featured_media.localFile &&
    featured_media.localFile.childImageSharp &&
    featured_media.localFile.childImageSharp.fluid;
  const [month, day] = getDateEntries(date);
  const link = `/blog/${slug}`;

  return (
    <article className={styles.container}>
      {/* <div className={styles.date}>
        <div>{day}</div>
        <div>{month}</div>
      </div> */}
      <Link to={link} className={styles.link}>
        {imageOptimized ? (
          <div>
            <Img fluid={imageOptimized} />
          </div>
        ) : (
          <img src={imageSource} alt="post preview" loading="lazy" />
        )}
        <span className={styles.hiddenTitle}>{title}</span>
      </Link>
      <h3 className={styles.title}>
        <Link to={link} dangerouslySetInnerHTML={{ __html: title }}></Link>
      </h3>
    </article>
  );
};

PostThumbnail.propTypes = {
  title: PropTypes.string,
  slug: PropTypes.string,
  date: PropTypes.string,
  featured_media: PropTypes.object,
};

export default PostThumbnail;
