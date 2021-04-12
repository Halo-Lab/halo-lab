import React, { useContext, useRef, useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Header from '@components/Header';
import Footer from '@components/Footer';

import { MenuContext, HeaderGradientContext } from '@contexts';

import styles from './Layout.module.scss';
import '@styles/index.scss';

let oldScrollPosition = 0;

const Layout = ({ children, isGlow, headerIsWhite, footerIsHide }) => {
  const { isOpened } = useContext(MenuContext);
  const headerRef = useRef(null);
  let scrollPosition = null;

  const [isHeaderGradient, setIsHeaderWithoutGradient] = useState(null);
  const [isHeaderShow, setIsHeaderShow] = useState(null);

  const mainClasses = classNames(styles.main, styles.hidden);
  const footerClasses = classNames(styles.footer, styles.hidden);

  const footer = !footerIsHide && (
    <footer className={footerClasses}>
      <Footer />
    </footer>
  );

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
          <main className={mainClasses}>{children}</main>

          {footer}
        </div>
      </>
    </HeaderGradientContext.Provider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isGlow: PropTypes.bool,
  headerIsWhite: PropTypes.bool,
  footerIsHide: PropTypes.bool,
};

Layout.defaultProps = {
  isGlow: true,
  isHeaderReady: true,
  footerIsHide: false,
};

export default Layout;
