import React, { useContext } from 'react';
import { Link } from 'gatsby';

import { MenuContext } from '@contexts';
import { useSiteMetadata, useHeaderAssets } from '@hooks/queries';
import Menu from './components/Menu';

import styles from './Header.module.scss';

const Header = () => {
  const metadata = useSiteMetadata();
  const { logotype } = useHeaderAssets();
  const { isOpened, handleTogglingIsOpened } = useContext(MenuContext);

  const menuStatus = isOpened ? 'opened' : 'closed';

  return (
    <div className={styles.container}>
      <div className={`${styles.bar} pageWrapper`}>
        <div className={styles.logotype}>
          <Link to="/">
            <img
              src={logotype.publicURL}
              alt="halo-Lab logotype"
              loading="lazy"
            />
          </Link>
        </div>

        <Link
          to="/contacts/"
          className={styles.contact}
          data-status={menuStatus}
        >
          Contact
        </Link>

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
