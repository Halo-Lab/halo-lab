import React, { useRef, useEffect } from 'react';

import { useBackgrounds } from '@hooks/queries';

import styles from './BackgroundStars.module.scss';

const BackgroundStars = () => {
  const { bigStars, smallStars } = useBackgrounds();
  const container = useRef(null);
  const wrapperClose = useRef(null);
  const wrapperDistant = useRef(null);

  let windowScrollPercentage = null;
  let wrapperCloseScrollOffset = null;
  let wrapperDistantScrollOffset = null;

  const handleScroll = () => {
    windowScrollPercentage = Math.ceil(
      (100 / (document.body.scrollHeight - document.body.clientHeight)) *
        window.pageYOffset
    );

    wrapperCloseScrollOffset = Math.ceil(
      ((wrapperClose.current.scrollHeight - wrapperClose.current.clientHeight) /
        100) *
        (windowScrollPercentage / 6)
    );

    wrapperDistantScrollOffset = Math.ceil(
      ((wrapperClose.current.scrollHeight - wrapperClose.current.clientHeight) /
        100) *
        (windowScrollPercentage / 9)
    );

    wrapperClose.current.scroll({
      top: wrapperCloseScrollOffset,
    });
    wrapperDistant.current.scroll({
      top: wrapperDistantScrollOffset,
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={container} className={styles.container}>
      <div ref={wrapperClose} className={styles.wrapper}>
        <div
          className={styles.layer}
          style={{ backgroundImage: `url('${bigStars.publicURL}')` }}
        />
      </div>
      <div ref={wrapperDistant} className={styles.wrapper}>
        <div
          className={styles.layer}
          style={{ backgroundImage: `url('${smallStars.publicURL}')` }}
        />
      </div>
    </div>
  );
};

export default BackgroundStars;
