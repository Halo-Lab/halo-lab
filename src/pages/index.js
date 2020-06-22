import React from 'react';

import { useSpring } from 'react-spring';

import Providers from '@components/Providers';
import Layout from '@components/Layout';
import BackgroundStars from '@components/BackgroundStars';
import Head from '@components/Head';
import HomePage from '@scenes/HomePage';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];

const Home = () => {
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
          <Head>
            <title>Home - Halo Lab Blog</title>
          </Head>
          <HomePage animation={props} />
        </Layout>
      </div>
    </Providers>
  );
};

export default Home;
