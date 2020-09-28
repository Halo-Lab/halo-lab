import React, { useState, Fragment } from 'react';
import { navigate } from 'gatsby';
import classNames from 'classnames';

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
        isValid: isValidEmail(value),
        value: value,
      },
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;

    const isValid = isValidEmail(data.email.value);

    if (!isValid) {
      return;
    }

    const formData = new FormData();

    formData.append('form-name', form.getAttribute('name'));
    formData.append('email', data.email.value);

    isValid &&
      fetch('/', {
        method: 'POST',
        body: formData,
      })
        .then(() => {
          setIsSubmitted(true);
        })
        .catch(() => {
          navigate('/error');
        });
  };

  const inputWrapperClass = classNames(styles.inputWrapper, {
    [styles.error]: !data.email.isValid && data.email.value.length > 0,
  });
  const btnClass = classNames(styles.button, {
    [styles.valid]: !data.email.isValid,
  });
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <h2 className={styles.title}>Subscribe and be on the course!</h2>
        <form
          className={styles.form}
          onSubmit={e => handleSubmit(e)}
          data-netlify="true"
          name="subscribe form"
        >
          <input type="hidden" name="form-name" value="subscribe form" />
          <div className={inputWrapperClass}>
            {!isSubmitted ? (
              <Fragment>
                <input
                  placeholder="Type your email"
                  className={styles.input}
                  type="text"
                  name="email"
                  id="email"
                  require="true"
                  onChange={handleChange}
                />
                <label className={styles.label} htmlFor="email">
                  Email
                </label>
                <button className={btnClass}>
                  <Arrow className={styles.svg} />
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
