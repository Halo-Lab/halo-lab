import React, { useContext } from 'react';

import { GlobalContext } from '@contexts';

import './Hero.scss';

const Hero = () => {
  const { images } = useContext(GlobalContext);

  const upworkLogo = images.getItem('cards/upwork-logo.svg');
  const dribbleLogo = images.getItem('cards/dribbble-logo.svg');
  const clutchMiniLogo = images.getItem('cards/clutch-mini-logo.svg');

  return (
    <section className="section section__hero">
      <div className="intro">
        <div className="center">
          <h1>
            <span>Design driven </span>
            <br />
            development of your
            <br />
            <span>web product </span>
            for years.
          </h1>
        </div>
        <div className="quote">
          Design is not just what it looks like. Design is how it works!” —
          Steve Jobs
        </div>
      </div>

      <div className="hero__info">
        <div className="hero__card-wrap">
          <a href="#" className="hero__info-card upwork-card">
            <div className="hero__info-card-body">
              <img src={upworkLogo.url} alt={upworkLogo.name} />
              <div>
                Best
                <br />
                Design Agency
                <br />
                2018 in Ukraine
              </div>
            </div>
          </a>
        </div>

        <div className="hero__card-wrap">
          <a href="#" className="hero__info-card dribbble-card">
            <div className="hero__info-card-body">
              <img src={dribbleLogo.url} alt={dribbleLogo.name} />
              <div>Top Trending Team with 3m Total Views</div>
            </div>
          </a>
        </div>

        <div className="hero__card-wrap">
          <a href="#" className="hero__info-card clutch-card">
            <div className="hero__info-card-body">
              <img src={clutchMiniLogo.url} alt={clutchMiniLogo.name} />
              <div>
                4.9/5
                <br />
                Average Rating by Our Clients
              </div>
            </div>
          </a>
        </div>

        <div className="hero__circle circle--sm-1"></div>
        <div className="hero__circle circle--sm-2"></div>
        <div className="hero__circle circle--md"></div>
        <div className="hero__circle circle--lg"></div>
      </div>
    </section>
  );
};

export default Hero;
