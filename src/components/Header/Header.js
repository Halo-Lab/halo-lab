import React, { useContext } from 'react';
import { ReactSVG } from 'react-svg';
import { Link } from 'gatsby';
import classNames from 'classnames';

import ThemeContext from '@context/ThemeContext';

import { useHeaderAssets } from '@hooks/queries';

import Menu from './components/Menu';

import styles from './Header.module.scss';

const Header = () => {
  const { logotype } = useHeaderAssets();
  const { themeState, setThemeState } = useContext(ThemeContext);

  const handleClick = () => {
    document.body.classList.toggle('locked');
    setThemeState(state => ({
      ...state,
      menu: {
        isOpen: !state.menu.isOpen,
      },
    }));
  };

  return (
    <div
      className={classNames(styles.container, {
        [styles.isWhite]: themeState.header.isWhite && !themeState.menu.isOpen,
        [styles.gradientIsRemoved]: themeState.header.isGradient,
      })}
    >
      <div className={classNames(styles.bar, 'pageWrapper')}>
        <div className={styles.logotype}>
          <Link to="/">
            <ReactSVG src={logotype.publicURL} />
          </Link>
        </div>

        <Link
          to="/contacts/"
          className={styles.contact}
          data-status={themeState.menu.isOpen ? 'opened' : 'closed'}
        >
          Contact
        </Link>

        {themeState.menu.isOpen ? <Menu /> : null}

        <div className={styles.menuBar}>
          <button
            type="button"
            className={styles.menuButton}
            onClick={handleClick}
          >
            <span
              className={styles.menuIcon}
              data-status={themeState.menu.isOpen ? 'opened' : 'closed'}
            ></span>
            <span className={styles.hiddenTitle}>Menu</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
