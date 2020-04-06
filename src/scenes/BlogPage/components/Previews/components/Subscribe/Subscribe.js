import React, { useState } from 'react';
import { navigate } from 'gatsby';

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
    setData(data => ({
      ...data,
      [name]: {
        valid: name === 'email' ? isCompanyEmailValid(value) : value,
        value: value,
      },
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    const valid = isCompanyEmailValid(data.email.value);

    setIsValid(valid);

    const url = 'https://getform.io/f/f79c95ff-15f5-45a8-87a6-259ef80cf1c5';
    const formData = new FormData();

    formData.append('quote-email', data.email.value);

    valid &&
      fetch(url, {
        method: 'POST',
        headers: {},
        body: formData,
      })
        .then(response => {
          console.log(response);
          // if (response.ok) {
          //   navigate('/thanks');
          // } else {
          //   navigate('/error');
          // }
        })
        .catch(e => {
          console.log('error', e);
          // navigate('/error');
        });
  };

  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <h2 className={styles.title}>Subscribe and be on the course!</h2>
        <form className={styles.form} onSubmit={e => handleSubmit(e)}>
          <div className={styles.inputWrapper}>
            <label className={styles.label} htmlFor="email">
              Type your email
            </label>
            <input
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
          </div>
        </form>
      </div>
      <span className={styles.smPlanet}></span>
    </div>
  );
};

export default Subscribe;
