import React, { useContext } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import Header from '@components/Header';
import Footer from '@components/Footer';
import CustomerChat from '@components/CustomerChat';
import { MenuContext } from '@contexts';

import styles from './Layout.module.scss';
import '@styles/index.scss';

const Layout = ({ children }) => {
  const { isOpened } = useContext(MenuContext);

  return (
    <>
      {/* TODO: This is very bad, I know. But. */}
      {isOpened ? (
        <Helmet>
          <body className={styles.locked}></body>
        </Helmet>
      ) : null}
      <CustomerChat />
      <div className={styles.container}>
        <header className={styles.header}>
          <Header />
        </header>
        <main className={`${styles.main} ${styles.hidden}`}>{children}</main>
        <footer className={`${styles.footer} ${styles.hidden}`}>
          <Footer />
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
