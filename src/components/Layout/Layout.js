import React, { useContext, useRef } from 'react';
import Helmet from 'react-helmet';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Header from '@components/Header';
import CustomerChat from '@components/CustomerChat';
import { MenuContext, HeaderGradientContext } from '@contexts';

import styles from './Layout.module.scss';
import '@styles/index.scss';
import Footer from '../Footer';

const Layout = ({ children, isGlow, headerIsWhite, footerIsHide }) => {
  const { isOpened } = useContext(MenuContext);

  const containerClasses = classNames(styles.container, {
    [styles.glow]: isGlow,
  });
  const mainClasses = classNames(styles.main, styles.hidden);
  const footerClasses = classNames(styles.footer, styles.hidden);

  const headerRef = useRef(null);

  const [isHeaderGradient, setIsHeaderWithoutGradient] = React.useState(null);

  const footer = footerIsHide ? null : (
    <footer className={footerClasses}>
      <Footer />
    </footer>
  );

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
        <div className={containerClasses}>
          <header className={styles.header}>
            <Header
              headerIsWhite={headerIsWhite}
              forwardedRef={headerRef}
              withoutGradient={isHeaderGradient}
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
};

Layout.defaultProps = {
  isGlow: true,
  footerIsHide: false,
};

export default Layout;
