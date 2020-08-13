import React, { useState, useRef } from 'react';
import { navigate } from 'gatsby';

import styles from './Form.module.scss';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

const Form = () => {
  const [form, setForm] = useState({});
  const [filesList, setFilesList] = useState([]);
  const attachmentInput = useRef(null);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleInputFileChange = e => {
    const mergedFilesList = [...e.target.files];
    setFilesList(mergedFilesList);
    setForm({ ...form, [e.target.name]: e.target.files[0] });
  };

  const handleFileClear = async () => {
    setFilesList([]);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...form,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error));
  };

  const fileAccept =
    '.png,.jpg,.pdf,.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document';

  return (
    <div className={styles.container}>
      <form
        className={styles.form}
        onSubmit={handleSubmit}
        name="contact"
        data-netlify="true"
        action="/thanks/"
      >
        <input type="hidden" name="form-name" value="contact" />
        <h3 className={styles.formTitle}>REQUEST A QUOTE</h3>
        <div className={`${styles.inputWrapper} ${styles.nameWrapper}`}>
          <input
            className={styles.input}
            type="text"
            name="name"
            id="name"
            require="true"
            required
            onChange={handleChange}
          />
          <label className={styles.placeholder} htmlFor="name">
            Full Name
          </label>
        </div>
        <div className={`${styles.inputWrapper} ${styles.companyWrapper}`}>
          <input
            className={styles.input}
            type="text"
            name="company"
            id="company"
            onChange={handleChange}
          ></input>
          <label className={styles.placeholder} htmlFor="company">
            Company
          </label>
        </div>
        <div className={`${styles.inputWrapper} ${styles.emailWrapper}`}>
          <input
            className={styles.input}
            type="text"
            name="email"
            id="email"
            require="true"
            required
            onChange={handleChange}
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
            required
            onChange={handleChange}
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
              name="quote-file"
              id="attachment-file"
              ref={attachmentInput}
              accept={fileAccept}
              onChange={handleInputFileChange}
            ></input>
            <div className={styles.attachmentName}>
              <button
                type="button"
                className={styles.attachmentButton}
                onClick={handleFileClear}
              ></button>
              {!!filesList.length && <span>{filesList[0].name}</span>}
            </div>
          </div>
        </div>
        <div className={styles.buttonWrap}>
          <button className={styles.button} type="submit">
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
