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

  const title = 'Home Page - Halo Lab';
  const description = `Halo Lab Team brings the design-driven development of your digital product to reality. We are working with a variety of projects, from the strict insurance website to a dynamic music application.`;
  return (
    <Providers>
      <div
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      >
        <BackgroundStars animation={props} />
        <Layout>
          <Head title={title} description={description}>
            <script type="application/ld+json">
              {`{
              "@context": "schema.org",
              "@type":"Organization",
              "name":"site",
              "url":"https://halo-lab.com/",
              "logo":"https://halo-lab.com/logo.svg",
              "contactPoint":
              [
                {
                  "@type": "ContactPoint",
                  "telephone": "+380632362920",
                  "contactType": "",
                  "areaServed": ""
                }
              ],
              "sameAs":
              ["https://www.facebook.com/halolabteam/", "https://www.instagram.com/halolabteam/", "https://twitter.com/halolabteam"]
            }`}
            </script>
          </Head>
          <HomePage animation={props} />
        </Layout>
      </div>
    </Providers>
  );
};

export default Home;
