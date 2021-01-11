import React from 'react';

import styles from './WhatWeDo.module.scss';

const WhatWeDo = () => {
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        Driving your business forward with strong products
      </div>
      <div className={styles.description}>
        We are a full-service digital agency that builds immersive user experience.
        Our team creates an exceptional visualization and thought-out functionality.
        We believe, our clients deserve to be remarkable in their business. The
        studio develops the products people appreciate all around the world.
      </div>
    </section>
  );
};

export default WhatWeDo;
