import React, { useEffect, useState, useContext } from 'react';
import classNames from 'classnames';

import { useSiteMetadata } from '@hooks/queries';

import ThemeContext from '@context/ThemeContext';

import styles from './MailUs.module.scss';

const POSITION_TO_TOP = 150;

const MailUs = () => {
  const { setThemeState } = useContext(ThemeContext);
  const metadata = useSiteMetadata();
  const elRef = React.useRef(null);

  let onElem = false;
  let elParams = null;
  let elPosition = null;

  const [backgroundParallax, setBackgroundParallax] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const setColoredBackground = colored => {
    onElem = colored;
    setThemeState(state => ({
      ...state,
      header: {
        isGradient: !state.header.isGradient,
      },
      footer: {
        isGradient: !state.footer.isGradient,
      },
    }));
  };

  const moveBackground = () => {
    elParams = elRef.current.getBoundingClientRect();
    elPosition = elParams.top - window.innerHeight;
    if (elPosition + elParams.height / 2 <= 0) {
      setBackgroundParallax({
        transform: `translate3d(0, ${elParams.height + elPosition}px, 0)`,
      });
      if (elParams.top < POSITION_TO_TOP && !onElem) {
        setColoredBackground(true);
      }
      if (elParams.top > POSITION_TO_TOP && onElem) {
        setColoredBackground(false);
      }
    }
  };

  useEffect(() => {
    elParams = elRef.current.getBoundingClientRect();
    setBackgroundParallax({
      transform: `translate3d(0, ${elParams.height / 2}px, 0)`,
    });
    window.addEventListener('scroll', moveBackground);
    return () => window.removeEventListener('scroll', moveBackground);
  }, []);

  return (
    <div
      ref={elRef}
      className={classNames(styles.container, {
        [styles.ishovered]: isHovered,
      })}
    >
      <span className={styles.background} style={backgroundParallax} />
      <p className={styles.title}>
        Ready to create
        <br />
        <span>your star?</span>
      </p>
      <a
        href={`mailto:${metadata.email}`}
        className={styles.link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        contact us
      </a>
    </div>
  );
};

export default MailUs;
