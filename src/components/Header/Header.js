import React, { useContext } from 'react';
import { Link } from 'gatsby';

import { MenuContext, GlobalContext } from '@contexts';
import { useSiteMetadata } from '@hooks/queries';
import Menu from './components/Menu';

import styles from './Header.module.scss';

const Header = () => {
  const metadata = useSiteMetadata();
  const { isOpened, handleTogglingIsOpened } = useContext(MenuContext);

  const { imagesAPI } = useContext(GlobalContext);
  const images = imagesAPI.get(['header-logo.svg']);

  const menuStatus = isOpened ? 'opened' : 'closed';

  return (
    <div className={styles.container}>
      <div className={`${styles.bar} pageWrapper`}>
        <div className={styles.logotype}>
          <Link to="/">
            <img src={images['header-logo.svg'].url} alt="logotype" />
          </Link>
        </div>

        <div className={styles.email} data-status={menuStatus}>
          <a href={`mailto:${metadata.email}`}>{metadata.email}</a>
        </div>

        {isOpened ? <Menu /> : null}

        <div className={styles.menuBar}>
          <button
            type="button"
            className={styles.menuButton}
            onClick={handleTogglingIsOpened}
          >
            <span className={styles.menuIcon} data-status={menuStatus}></span>
            <span className={styles.hiddenTitle}>Menu</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
