import React, { useState, useRef } from 'react';
import { navigate } from 'gatsby';
import { isValidEmail } from '@helpers';

import styles from './Form.module.scss';

const Form = () => {
  const attachmentInput = useRef(null);
  const [data, setData] = useState({
    name: {
      value: '',
      valid: false,
    },
    company: {
      value: '',
      valid: false,
    },
    email: {
      value: '',
      valid: false,
    },
    message: {
      value: '',
      valid: false,
    },
  });

  const [state, setState] = useState({});

  const handleChange = ({ target: { name, value } }) => {
    setData(data => ({
      ...data,
      [name]: {
        valid: name === 'email' ? isValidEmail(value) : value,
        value: value,
      },
    }));
    setState({ ...state, [name]: value });
  };

  const [isValid, setIsValid] = useState(true);
  const [filesList, setFilesList] = useState([]);

  const fileAccept =
    '.png,.jpg,.pdf,.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document';

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;

    const valid =
      data.name.valid && isValidEmail(data.email.value) && data.message.valid;

    setIsValid(valid);

    const formData = new FormData();

    formData.append('form-name', form.getAttribute('name'));
    formData.append('quote-name', data.name.value);
    formData.append('quote-company', data.company.value);
    formData.append('quote-email', data.email.value);
    formData.append('quote-message', data.message.value);
    formData.append('file', attachmentInput.current.files[0] || '');

    valid &&
      fetch('/', {
        method: 'POST',
        headers: {},
        body: formData,
      })
        .then(response => {
          if (response.ok) {
            navigate('/thanks');
          } else {
            navigate('/error');
          }
        })
        .catch(() => {
          navigate('/error');
        });
  };

  const handleInputFileChange = async e => {
    const mergedFilesList = [...e.target.files];
    setFilesList(mergedFilesList);
    setState({ ...state, [e.target.name]: e.target.files[0] });
  };

  const handleFileClear = async () => {
    setFilesList([]);
  };

  return (
    <div className={styles.container}>
      <form
        className={styles.form}
        onSubmit={e => handleSubmit(e)}
        data-netlify="true"
        name="contacts"
      >
        <input type="hidden" name="form-name" value="file-upload" />
        <h3 className={styles.formTitle}>REQUEST A QUOTE</h3>
        <div className={`${styles.inputWrapper} ${styles.nameWrapper}`}>
          <input
            className={`${styles.input} ${
              !isValid && !data.name.valid ? styles.error : ''
            } ${data.name.valid ? styles.focused : ''}`}
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
            className={`${styles.input} ${
              data.company.valid ? styles.focused : ''
            }`}
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
            className={`${styles.input} ${
              !isValid && !data.email.valid ? styles.error : ''
            } ${data.email.value.length ? styles.focused : ''}`}
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
            className={`${styles.textarea} ${
              !isValid && !data.message.valid ? styles.error : ''
            } ${data.message.valid ? styles.focused : ''}`}
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
          <div
            className={`${styles.attachmentWrapper} ${
              filesList.length ? styles.attached : ''
            }`}
          >
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
