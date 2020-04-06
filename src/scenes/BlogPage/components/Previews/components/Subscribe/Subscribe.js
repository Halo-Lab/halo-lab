import React, { useState } from 'react';

import styles from './Subscribe.module.scss';

const Subscribe = () => {
  const [data, setData] = useState({
    email: {
      value: '',
      valid: false,
    },
  });
  const [isValid, setIsValid] = useState(true);

  const isCompanyEmailValid = email => {
    const regexp = new RegExp(/[^@]+@[^.]+\..+/g);
    return regexp.test(email);
  };

  const handleChange = ({ target: { name, value } }) => {
    console.log(value);
    setData(data => ({
      ...data,
      [name]: {
        valid: name === 'email' ? isCompanyEmailValid(value) : value,
        value: value,
      },
    }));
  };

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
              className={`${styles.input} ${
                !data.email.valid ? styles.error : ''
              }`}
              type="text"
              name="email"
              id="email"
              require="true"
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
      <span className={styles.smPlanet}></span>
    </div>
  );
};

export default Subscribe;
