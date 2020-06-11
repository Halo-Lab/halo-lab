import React, { useEffect } from 'react';
import { useSpring, animated as a } from 'react-spring';
import { useSiteMetadata } from '@hooks/queries';
import styles from './MailUs.module.scss';

const myConfig = { mass: 1, tension: 200, friction: 60 };

const MailUs = () => {
  const metadata = useSiteMetadata();

  const elRef = React.useRef(null);
  let elPosition = null;
  let elHeight = null;
  const [blockProps, set] = useSpring(() => ({
    from: { y: 10 },
    config: myConfig,
  }));
  const moveTop = y => `translate(0, ${y}%)`;
  const toPercent = val => Math.ceil((100 / document.body.scrollHeight) * val);

  const moveBackground = ({ isImmediate = false }) => {
    elPosition = toPercent(
      elRef.current.getBoundingClientRect().top - window.innerHeight
    );
    elHeight = elRef.current.getBoundingClientRect().height;
    if (elPosition + toPercent(elHeight / 5) <= 0) {
      set({ y: Math.ceil(elPosition * 1.5), immediate: isImmediate });
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
