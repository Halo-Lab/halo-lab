import React, { useEffect, useRef, useState } from 'react';
import MagneticHover from '../../helpers/MagneticHover/magneticHover';

import styles from './HoverUnderline.module.scss';

const HoverUnderline = ({ element, radius }) => {
  const [lineWidth, setLineWidth] = useState(0);

  useEffect(() => {
    console.log(element);
    new MagneticHover({
      element: element,
      radius: Number(radius),
      callback: distance => {
        console.log(distance);
        setLineWidth(100 - distance);
      },
    });
  }, [lineWidth]);
  return (
    <span
      className={styles.underline}
      style={{ width: lineWidth + '%' }}
    ></span>
  );
};

export default HoverUnderline;
