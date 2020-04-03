import React from 'react';

import styles from './Subscribe.module.scss';

const Subscribe = () => {
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <h2 className={styles.title}>Subscribe and be on the course!</h2>
        <form className={styles.form}>
          <div className={styles.inputWrapper}>
            <label className={styles.label} htmlFor="email">
              Type your email
            </label>
            <input
              className={styles.input}
              type="text"
              name="email"
              id="email"
              require="true"
            />
          </div>
        </form>
      </div>
      <span className={styles.smPlanet}></span>
    </div>
  );
};

export default Subscribe;
