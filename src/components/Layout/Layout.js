import React from "react";
import PropTypes from "prop-types";

import Header from "@components/Header";
import Footer from "@components/Footer";

import styles from "./Layout.module.scss";

const Layout = ({ children }) => {

  return (
    <div className={styles.container} id="wrapper">
      <div className={styles.header}>
        <Header/>
      </div>
      <main className={styles.main}>
        {children}
      </main>
      <div className={styles.footer}>
        <Footer/>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
