import PropTypes from 'prop-types';
import React from 'react';

import GradientText from '@/components/GradientText';

import Categories from './components/Categories';
import Planets from './components/Planets';

import styles from './Headline.module.scss';

const NextProjectCategory = () => (
  <div className={styles.nextProjectCategory}>Next Project</div>
);

const Headline = ({ data, truncated, showPlanets }) => {
  const { categories, title } = data;

  const links = truncated ? (
    <NextProjectCategory />
  ) : (
    <Categories items={categories} />
  );

  return (
    <Planets showPlanets={showPlanets}>
      <div className={styles.textAlign}>
        {links}
        <h1 className={styles.title}>
          <GradientText text={title} />
        </h1>
      </div>
    </Planets>
  );
};

Headline.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
  truncated: PropTypes.bool,
  showPlanets: PropTypes.bool,
};

Headline.defaultProps = {
  truncated: false,
  showPlanets: true,
};

export default Headline;
