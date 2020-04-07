import React, { useState, Fragment } from 'react';
import { navigate } from 'gatsby';

import styles from './Subscribe.module.scss';
import { isValidEmail } from '@helpers';
import Arrow from './images/arrow.inline.svg';
const Subscribe = () => {
  const [data, setData] = useState({
    email: {
      value: '',
      isValid: false,
    },
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setData(data => ({
      ...data,
      [name]: {
        valid: name === 'email' ? isValidEmail(value) : value,
        value: value,
      },
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    const valid = isValidEmail(data.email.value);

    const url = 'https://getform.io/f/f79c95ff-15f5-45a8-87a6-259ef80cf1c5';
    const formData = new FormData();

    formData.append('quote-email', data.email.value);

    valid &&
      fetch(url, {
        method: 'POST',
        headers: {},
        body: formData,
      })
        .then(() => {
          setIsSubmitted(true);
        })
        .catch(() => {
          navigate('/error');
        });
  };

  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <h2 className={styles.title}>Subscribe and be on the course!</h2>
        <form className={styles.form} onSubmit={e => handleSubmit(e)}>
          <div className={styles.inputWrapper}>
            {!isSubmitted ? (
              <Fragment>
                <input
                  placeholder="Type your email"
                  className={`${styles.input} ${
                    !data.email.valid && data.email.value.length > 0
                      ? styles.error
                      : ''
                  }`}
                  type="text"
                  name="email"
                  id="email"
                  require="true"
                  onChange={handleChange}
                />
                <button className={styles.button}>
                  <Arrow />
                </button>
              </Fragment>
            ) : (
              <p className={styles.successMessage}>EMAIL SENT, THANKS!</p>
            )}
          </div>
        </form>
      </div>
      <span className={styles.smPlanet}></span>
    </div>
  );
};

export default Subscribe;
