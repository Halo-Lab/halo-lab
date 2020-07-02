import React, { useEffect } from 'react';
import { useSpring, animated as a } from 'react-spring';
import { useSiteMetadata } from '@hooks/queries';
import styles from './MailUs.module.scss';

const myConfig = { mass: 1, tension: 280, friction: 120 };

const MailUs = () => {
  const metadata = useSiteMetadata();
  const elRef = React.useRef(null);
  const elStartPosition = 20;
  let elParams = null;
  let elPosition = null;
  const [blockProps, set] = useSpring(() => ({
    from: { y: elStartPosition },
    config: myConfig,
  }));
  const moveTop = y => `translate3d(0, ${y}%, 0)`;
  const toPercent = val => Math.round((100 / document.body.scrollHeight) * val);

  const moveBackground = ({ isImmediate = false }) => {
    elParams = elRef.current.getBoundingClientRect();
    elPosition = toPercent(elParams.top - window.innerHeight);
    if (elPosition <= 0) {
      set({ y: elStartPosition + elPosition * 5, immediate: isImmediate });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', moveBackground);
    moveBackground({ isImmediate: true });

    return () => window.removeEventListener('scroll', moveBackground);
  }, []);

  return (
    <div className={styles.container} ref={elRef}>
      <a.span
        className={styles.background}
        style={{
          transform: blockProps.y.interpolate(moveTop),
        }}
      />
      <p className={styles.title}>
        Ready to create
        <br />
        <span>your star?</span>
      </p>
      <a href={`mailto:${metadata.email}`} className={styles.link}>
        contact us
      </a>
    </div>
  );
};

export default MailUs;
