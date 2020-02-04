import React, { useContext } from 'react';

import { GlobalContext } from '@contexts';

import './Footer.scss';

const Footer = () => {
  const { imagesAPI } = useContext(GlobalContext);
  const images = imagesAPI.get('logo.svg');

  const itemsSocial = [
    { href: 'https://twitter.com/halolabteam', classIcon: 's-twitter' },
    { href: 'https://www.instagram.com/halolabteam/', classIcon: 's-inst' },
    { href: 'https://www.facebook.com/halolabteam/', classIcon: 's-fb' },
    { href: 'https://www.behance.net/halolab', classIcon: 's-beh' },
    { href: 'https://dribbble.com/halolab', classIcon: 's-dbl' },
  ];

  return (
    <footer className="clearfix">
      <div className="footer_conteiner">
        <div className="footer__logo">
          <img src={images['logo.svg'].url} alt={images['logo.svg'].name} />
          With Love from Halo Lab
        </div>

        <div className="socials">
          <ul>
            {itemsSocial.map(({ href, classIcon }) => {
              return (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classIcon}
                  >
                    {classIcon}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
