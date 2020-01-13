import React from "react";

import { useToggleOpenedStatus } from "@hooks/index";

import styles from "./ModalWrapper.module.scss";

const ModalWrapper = ({ children }) => {
  const { isOpened, handleTogglingOpenedStatus } = useToggleOpenedStatus();
  const onWrapperClick = ({ target }) => {
    const isWrapper = target.getAttribute("data-name") === "modalWrapper";

    if (isWrapper) {
      handleTogglingOpenedStatus();
    }
  };

  return (
    <div>
      <button type="button" onClick={handleTogglingOpenedStatus}>
        Toggle
      </button>
      {isOpened ? (
        <div
          className={styles.wrapper}
          data-name="modalWrapper"
          onClick={onWrapperClick}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
};

export default ModalWrapper;
