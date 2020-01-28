import React, { useState } from 'react';

import styles from './Form.module.scss';

const Form = () => {
  let [data, setData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
    files: [],
  });

  // const key = 'https://getform.io/f/f65d5c0b-3ff7-40f7-a418-3ea72cd680cd';

  // const isNotEmpty = value => value !== '';

  // const isCompanyEmailValid = email => {
  //   const regexp = new RegExp(/[^@]+@[^.]+\..+/g);
  //   return regexp.test(email);
  // };

  // const isFileSizeValid = (fileType, fileSize) => {
  //   const fileSizeInMB = fileSize / 1024 / 1024;

  //   return [ALLOWED_FILES.PDF.MIME_TYPE, ALLOWED_FILES.PPT.MIME_TYPE].includes(
  //     fileType
  //   )
  //     ? fileSizeInMB < 10
  //     : fileSizeInMB < 1;
  // };

  const handleSubmit = () => {
    console.log(data);
  };

  const handleInputFileChange = data => {
    console.log(data);
  };

  return (
    <div className={styles.container}>
      <form
        className={styles.form}
        action="#"
        method="POST"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <h3 className={styles.formTitle}>REQUEST A QUOTE</h3>
        <div className={styles.inputWrapper}>
          <input
            className={styles.input}
            type="text"
            name="name"
            id="name"
            require="true"
            onChange={event => setData({ name: event.target.value })}
          />
          <label className={styles.placeholder} htmlFor="name">
            Full Name
          </label>
        </div>
        <div className={styles.inputWrapper}>
          <input
            className={styles.input}
            type="text"
            name="company"
            id="company"
            onChange={event => setData({ company: event.target.value })}
          ></input>
          <label className={styles.placeholder} htmlFor="company">
            Company
          </label>
        </div>
        <div className={styles.inputWrapper}>
          <input
            className={styles.input}
            type="email"
            name="email"
            id="email"
            require="true"
            onChange={event => setData({ email: event.target.value })}
          />
          <label className={styles.placeholder} htmlFor="email">
            Email
          </label>
        </div>
        <h3 className={`${styles.formTitle} ${styles.formTitleMobile}`}>
          Message
        </h3>
        <div className={styles.textareaWrapper}>
          <textarea
            className={styles.textarea}
            name="message"
            id="message"
            require="true"
            onChange={event => setData({ message: event.target.value })}
          ></textarea>
          <label className={styles.placeholder} htmlFor="message">
            What is your project about?
          </label>
          <div className={styles.block}></div>
          <div className={styles.attachmentWrapper}>
            <label
              className={styles.attachmentLabel}
              htmlFor="attachment-file"
            ></label>
            <input
              className={styles.attachmentFile}
              type="file"
              name="file"
              id="attachment-file"
              accept=".png,.jpg,.pdf,.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              onChange={handleInputFileChange}
            ></input>
            <div className={styles.attachmentName}>
              <button className={styles.attachmentButton}></button>
            </div>
          </div>
        </div>
        <button className={styles.button} type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default Form;
