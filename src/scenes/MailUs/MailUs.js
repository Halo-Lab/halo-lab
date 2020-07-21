import React, { useEffect, useState } from 'react';
import { useSiteMetadata } from '@hooks/queries';
import styles from './MailUs.module.scss';

const MailUs = () => {
  const metadata = useSiteMetadata();
  const elRef = React.useRef(null);
  let elParams = null;
  let elPosition = null;
  const [backgroundParallax, setBackgroundParallax] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const moveBackground = () => {
    elParams = elRef.current.getBoundingClientRect();
    elPosition = elParams.top - window.innerHeight;
    if (elPosition + elParams.height / 2 <= 0) {
      setBackgroundParallax({
        transform: `translate3d(0, ${elParams.height + elPosition}px, 0)`,
      });
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
      // className={styles.container}
      ref={elRef}
      className={
        isHovered ? `${styles.container} ishovered` : `${styles.container}`
      }
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
