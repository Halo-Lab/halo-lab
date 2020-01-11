import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";

import ApplicationHeader from "@components/ApplicationHeader";
import ApplicationFooter from "@components/ApplicationFooter";
import BackgroundStars from "@components/BackgroundStars";
import { MenuContext } from "@contexts";
import { useToggleOpenedStatus } from "@hooks";

import styles from "./ApplicationLayout.module.scss";
import "./ApplicationLayout.scss";

const ApplicationLayout = ({ children }) => {
  const menuState = useToggleOpenedStatus();

  return (
    <MenuContext.Provider value={menuState}>
      <BackgroundStars/>
      {
          menuState.isOpened ? (
            <Helmet>
              <body class="body-inside menu--open"></body>
            </Helmet>
          ) : null
        }
      <div className={styles.container} id="wrapper">
        <div className={styles.header}>
          <ApplicationHeader/>
        </div>
        <main className={`${styles.main} hiddenable`}>
          {children}
        </main>
        <div className={`${styles.footer} hiddenable`}>
          <ApplicationFooter/>
        </div>
      </div>
    </MenuContext.Provider>
  );
};

ApplicationLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ApplicationLayout;
