import React from 'react';

// import { useHomeHeroAssets } from '@hooks/queries';
// import Info from './components/Info';

import styles from './Hero.module.scss';

const Hero = () => {
  // eslint-disable-next-line no-unused-vars
  // const { quotes, ...infoAssets } = useHomeHeroAssets();

  return (
    <section className={styles.container}>
      <div>
        <h2 className={styles.title}>
          <span>Design driven</span>
          <br />
          development of
          <br />
          your <span>web product</span> <br />
          for years.
        </h2>
        {/* <div className={styles.subtitle}>
          Design is not just what it looks like. Design is how it works!” —
          Steve Jobs
        </div> */}
      </div>

      {/* <Info {...infoAssets} /> */}
    </section>
  );
};

export default Hero;
