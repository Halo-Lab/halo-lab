import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import { GlobalContext } from '@contexts';
import { useProjectImages } from '@hooks/queries';
import Partners from './components/Partners';

import styles from './List.module.scss';

const List = () => {
  const { preview1, preview2, preview3, avatar1 } = useProjectImages();
  const { imagesAPI } = useContext(GlobalContext);
  const images = imagesAPI.get([
    'partners/forbes.svg',
    'partners/mashable.svg',
    'partners/indiegogo.svg',
    'partners/techcrunch.svg',
    'partners/vc.ru.svg',
    'partners/angellist.svg',
  ]);

  const items = [
    {
      link: '#',
      preview: preview1,
      tags: 'UX, UI, Illustrations, Icons',
      title: 'Reinvented bedding cutting price for 50%',
      review: {
        avatar: avatar1,
        author: 'Jon-Paul Wheatley, CPO',
        text: 'Highly recommend!',
      },
      partners: [
        images['partners/forbes.svg'],
        images['partners/mashable.svg'],
        images['partners/indiegogo.svg'],
      ],
    },
    {
      link: '#',
      preview: preview2,
      tags: 'Analytics, UX, UI, Icons, Front-end',
      title: 'Game Analytics wins TechCrunch Disrupt & Raise $2.6M',
      review: {
        avatar: avatar1,
        author: 'Bogdan Suchyk, CEO',
        text: 'Awesome guys!',
      },
      partners: [
        images['partners/forbes.svg'],
        images['partners/techcrunch.svg'],
        images['partners/mashable.svg'],
        images['partners/angellist.svg'],
      ],
    },
    {
      link: '#',
      preview: preview3,
      tags: 'Analytics, UX, UI, Front-end',
      title: 'Indiegogo superstar smart clock which ease your life',
      review: {
        avatar: avatar1,
        author: 'Jon-Paul Wheatley, CPO',
        text: 'Highly recommend!',
      },
      partners: [
        images['partners/forbes.svg'],
        images['partners/techcrunch.svg'],
        images['partners/vc.ru.svg'],
        images['partners/indiegogo.svg'],
      ],
    },
  ];

  return (
    <ul className={styles.container}>
      {items.map(({ link, partners, preview, review, tags, title }, index) => {
        const isReversed = !((index + 1) % 2);

        return (
          <li key={title} className={styles.item}>
            <div className={styles.project}>
              <div className={styles.preview}>
                <a href={link}>
                  <Img fluid={preview.childImageSharp.fluid} />
                </a>
              </div>
              <div className={styles.description}>
                <div className={styles.tags}>{tags}</div>
                <div className={styles.title}>
                  <a href={link}>{title}</a>
                </div>
                <div className={styles.descriptionLink}>
                  <a href={link}>More info</a>
                </div>
                <div className={styles.review}>
                  <div className={styles.avatar}>
                    <Img fluid={review.avatar.childImageSharp.fluid} />
                  </div>
                  <div className={styles.reviewContent}>
                    <div className={styles.reviewText}>{review.text}</div>
                    <div className={styles.reviewAuthor}>{review.author}</div>
                  </div>
                </div>
              </div>
            </div>
            <Partners items={partners} reversed={isReversed} />
          </li>
        );
      })}
    </ul>
  );
};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default List;
