import React from 'react';

import { useSpring } from 'react-spring';

import Providers from '@components/Providers';
import Layout from '@components/Layout';
import BackgroundStars from '@components/BackgroundStars';
import Head from '@components/Head';
import HomePage from '@scenes/HomePage';
import PropTypes from 'prop-types';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];

const Home = ({ title, description }) => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  return (
    <Providers>
      <div
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      >
        <BackgroundStars animation={props} />
        <Layout>
          <Head title={title} description={description}></Head>
          <HomePage animation={props} />
        </Layout>
      </div>
    </Providers>
  );
};

Home.defaultProps = {
  title: `Home Page - Halo Lab`,
  description: `Halo Lab Team brings the design-driven development of your digital product to reality. We are working with a variety of projects, from the strict insurance website to a dynamic music application.`,
};

Home.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Home;
