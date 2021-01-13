import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './Planets.module.scss';

const PlanetsComponent = () => {
  const uranus = classNames(styles.planet, styles.planetUranus);
  const neptune = classNames(styles.planet, styles.planetNeptune);
  const jupiter = classNames(styles.planet, styles.planetJupiter);

  return (
    <>
      <div className={jupiter} />
      <div className={neptune} />
      <div className={uranus} />
    </>
  );
};

const Planets = ({ children, showPlanets }) => {
  const planets = showPlanets && <PlanetsComponent />;

  return (
    <div className={styles.planetsWrapper}>
      {planets}
      {children}
    </div>
  );
};

Planets.propTypes = {
  showPlanets: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
Planets.defaultProps = {
  showPlanets: true,
};

export default Planets;
