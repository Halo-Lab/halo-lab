import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import { GlobalContext } from '@contexts';
import { useProjectImages } from '@hooks/queries';

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
    'jackandjones.svg',
    'udemy.svg',
    'kkl-luzern.svg',
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
    },
    {
      link: '#',
      preview: preview2,
      tags: 'UX, UI, Illustrations, Icons',
      title: 'Reinvented bedding cutting price for 50%',
      review: {
        avatar: avatar1,
        author: 'Jon-Paul Wheatley, CPO',
        text: 'Highly recommend!',
      },
    },
    {
      link: '#',
      preview: preview3,
      tags: 'UX, UI, Illustrations, Icons',
      title: 'Reinvented bedding cutting price for 50%',
      review: {
        avatar: avatar1,
        author: 'Jon-Paul Wheatley, CPO',
        text: 'Highly recommend!',
      },
    },
  ];
  console.log('items', items);

  return (
    <ul className={styles.container}>
      {items.map(({ link, preview, tags, title, review }) => {
        return (
          <li key={title} className={styles.item}>
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
