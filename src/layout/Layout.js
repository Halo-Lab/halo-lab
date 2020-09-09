import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Header from '@components/Header';
import Footer from '@components/Footer';
import CustomerChat from '@components/CustomerChat';

import ThemeContext from '@context/ThemeContext';

import styles from './Layout.module.scss';

import '@styles/index.scss';

const theme = {
  header: {
    isWhite: false,
    isGradient: false,
  },
  menu: {
    isOpen: false,
  },
  footer: {
    isGradient: false,
  },
};

const Layout = ({ children }) => {
  const [themeState, setThemeState] = useState(theme);

  return (
    <ThemeContext.Provider value={{ themeState, setThemeState }}>
      <CustomerChat />
      <div className={classNames(styles.container, styles.glow)}>
        <header className={styles.header}>
          <Header />
        </header>
        <main
          className={classNames(styles.main, {
            [styles.hidden]: themeState.menu.isOpen,
          })}
        >
          {children}
        </main>
        <footer
          className={classNames(styles.footer, {
            [styles.hidden]: themeState.menu.isOpen,
            [styles.gradient]: themeState.footer.isGradient,
          })}
        >
          <Footer />
        </footer>
      </div>
    </ThemeContext.Provider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
