import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import MagneticHover from '@helpers/MagneticHover/magneticHover';

import styles from './MagneticLink.module.scss';

const defaultWidth = 40;

const MagneticLink = ({ radius = 100, text, to }) => {
  const [lineWidth, setLineWidth] = useState(defaultWidth);
  const linkEl = useRef(null);
  useEffect(() => {
    new MagneticHover({
      element: linkEl.current,
      radius: Number(radius),
      callback: distance => {
        if (defaultWidth < 100 - distance) {
          setLineWidth(100 - distance);
        } else {
          setLineWidth(defaultWidth);
        }
      },
    });
  }, [linkEl]);
  return (
    <a href={to} className={styles.link} ref={linkEl}>
      {text}
      <span
        className={styles.underline}
        style={{ width: lineWidth + '%' }}
      ></span>
    </a>
  );
};

MagneticLink.propTypes = {
  radius: PropTypes.number,
  to: PropTypes.string,
  text: PropTypes.string,
};

export default MagneticLink;
