import React, { useContext, useRef, useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Header from '@components/Header';
import Footer from '@components/Footer';
import CustomerChat from '@components/CustomerChat';

import { MenuContext, HeaderGradientContext } from '@contexts';

import styles from './Layout.module.scss';
import '@styles/index.scss';

let oldScrollPosition = 0;

const Layout = ({ children, isGlow, headerIsWhite }) => {
  const { isOpened } = useContext(MenuContext);
  const headerRef = useRef(null);

  const [isHeaderGradient, setIsHeaderWithoutGradient] = useState(null);
  const [isHeaderShow, setIsHeaderShow] = useState(null);

  let scrollPosition = null;

  const handleScroll = () => {
    scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollPosition - oldScrollPosition > 0) {
      setIsHeaderShow(false);
    } else {
      setIsHeaderShow(true);
    }
    oldScrollPosition = scrollPosition;
  };

  useEffect(() => {
    setIsHeaderShow(true);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeaderGradientContext.Provider value={{ setIsHeaderWithoutGradient }}>
      <>
        {/* TODO: This is very bad, I know. But. */}
        {isOpened ? (
          <Helmet>
            <body className={styles.locked}></body>
          </Helmet>
        ) : null}
        <CustomerChat />
        <div
          className={classNames(styles.container, { [styles.glow]: isGlow })}
        >
          <header className={styles.header}>
            <Header
              headerIsWhite={headerIsWhite}
              withoutGradient={isHeaderGradient}
              headerShow={isHeaderShow}
              forwardedRef={headerRef}
            />
          </header>
          <main className={classNames(styles.main, styles.hidden)}>
            {children}
          </main>
          <footer className={classNames(styles.footer, styles.hidden)}>
            <Footer />
          </footer>
        </div>
      </>
    </HeaderGradientContext.Provider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isGlow: PropTypes.bool,
  headerIsWhite: PropTypes.bool,
};

Layout.defaultProps = {
  isGlow: true,
  isHeaderReady: true,
};

export default Layout;
