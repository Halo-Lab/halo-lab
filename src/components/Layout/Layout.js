import React, { useContext } from 'react';
import Helmet from 'react-helmet';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Header from '@components/Header';
import Footer from '@components/Footer';
import CustomerChat from '@components/CustomerChat';
import { MenuContext } from '@contexts';

import styles from './Layout.module.scss';
import '@styles/index.scss';

const Layout = ({ children, isGlow }) => {
  const { isOpened } = useContext(MenuContext);

  const containerClasses = classNames(styles.container, {
    [styles.glow]: isGlow,
  });
  const mainClasses = classNames(styles.main, styles.hidden);
  const footerClasses = classNames(styles.footer, styles.hidden);

  return (
    <>
      {/* TODO: This is very bad, I know. But. */}
      {isOpened ? (
        <Helmet>
          <body className={styles.locked}></body>
        </Helmet>
      ) : null}
      <CustomerChat />
      <div className={containerClasses}>
        <header className={styles.header}>
          <Header />
        </header>
        <main className={mainClasses}>{children}</main>
        <footer className={footerClasses}>
          <Footer />
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isGlow: PropTypes.bool,
};

Layout.defaultProps = {
  isGlow: true,
};

export default Layout;
