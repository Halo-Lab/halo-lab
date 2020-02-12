import React, { useContext } from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

import { GlobalContext } from '@contexts';
import { useProjectImages } from '@hooks/queries';

import './Projects.scss';

const Projects = ({ title, navigation }) => {
  const pj = useProjectImages();
  console.log(pj);
  const { imagesAPI } = useContext(GlobalContext);
  const images = imagesAPI.get([
    'project/project1.jpg',
    'project/project2.jpg',
    'project/project3.jpg',
    'avatar1.jpg',
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

  return (
    <section className="section section__projects">
      <h2 className="portfolio__title">{title}</h2>

      <div className="portfolio__project">
        <div className="project">
          <div className="project__container">
            <div className="project__media-container">
              <div className="project__image-container">
                <a href="https://www.behance.net/gallery/65940547/Primary-Smart-Bedding-Website">
                  <img
                    src={images['project/project1.jpg'].url}
                    alt={images['project/project1.jpg'].name}
                    draggable="false"
                  />
                </a>
              </div>
            </div>

            <div className="project__text-container">
              <div className="project__tags">UX, UI, Illustrations, Icons</div>
              <h3 className="project__title">
                <a href="https://www.behance.net/gallery/65940547/Primary-Smart-Bedding-Website">
                  Reinvented bedding cutting price for 50%
                </a>
              </h3>

              <a
                className="project__link"
                href="https://www.behance.net/gallery/65940547/Primary-Smart-Bedding-Website"
                target="_blank"
                rel="noopener noreferrer"
              >
                MORE INFO
              </a>
              <div className="project__review-container">
                <img
                  className="project__avatar"
                  src={images['avatar1.jpg'].url}
                  alt={images['avatar1.jpg'].name}
                  draggable="false"
                />
                <div>
                  <p className="project__review">Highly recommend!</p>
                  <p className="project__author">Jon-Paul Wheatley, CPO</p>
                </div>
              </div>
            </div>
          </div>
          <ul className="project__partners-list">
            <li className="project__partners-item">
              <img
                src={images['partners/forbes.svg'].url}
                alt={images['partners/forbes.svg'].name}
                draggable="false"
              />
            </li>
            <li className="project__partners-item">
              <img
                src={images['partners/mashable.svg'].url}
                alt={images['partners/mashable.svg'].name}
                draggable="false"
              />
            </li>
            <li className="project__partners-item">
              <img
                src={images['partners/indiegogo.svg'].url}
                alt={images['partners/indiegogo.svg'].url}
                draggable="false"
              />
            </li>
          </ul>
        </div>

        <div className="project project--reverse">
          <div className="project__container">
            <div className="project__media-container">
              <div className="project__image-container">
                <a href="https://www.behance.net/gallery/66754531/Mobalytics-Game-Analytics-Platform-Website">
                  <img
                    src={images['project/project2.jpg'].url}
                    alt={images['project/project2.jpg'].name}
                    draggable="false"
                  />
                </a>
              </div>
            </div>

            <div className="project__text-container">
              <div className="project__tags">
                Analytics, UX, UI, Icons, Front-end
              </div>
              <h3 className="project__title">
                <a href="https://www.behance.net/gallery/66754531/Mobalytics-Game-Analytics-Platform-Website">
                  Game Analytics wins TechCrunch Disrupt & Raise $2.6M
                </a>
              </h3>
              <a
                className="project__link"
                href="https://www.behance.net/gallery/66754531/Mobalytics-Game-Analytics-Platform-Website"
                target="_blank"
                rel="noopener noreferrer"
              >
                MORE INFO
              </a>
              <div className="project__review-container">
                <img
                  className="project__avatar"
                  src={images['avatar1.jpg'].url}
                  alt={images['avatar1.jpg'].name}
                  draggable="false"
                />
                <div>
                  <p className="project__review">Awesome guys!</p>
                  <p className="project__author">Bogdan Suchyk, CEO</p>
                </div>
              </div>
            </div>
          </div>
          <ul className="project__partners-list">
            <li className="project__partners-item">
              <img
                src={images['partners/forbes.svg'].url}
                alt={images['partners/forbes.svg'].name}
                draggable="false"
              />
            </li>
            <li className="project__partners-item">
              <img
                src={images['partners/techcrunch.svg'].url}
                alt={images['partners/techcrunch.svg'].name}
                draggable="false"
              />
            </li>
            <li className="project__partners-item">
              <img
                src={images['partners/vc.ru.svg'].url}
                alt={images['partners/vc.ru.svg'].name}
                draggable="false"
              />
            </li>
            <li className="project__partners-item">
              <img
                src={images['partners/angellist.svg'].url}
                alt={images['partners/angellist.svg'].name}
                draggable="false"
              />
            </li>
          </ul>
        </div>

        <div className="project project--clock">
          <div className="project__container">
            <div className="project__media-container">
              <div className="project__image-container">
                <a href="https://www.behance.net/gallery/70303073/Glance-Clock-First-Smart-Clock">
                  <img
                    src={images['project/project3.jpg'].url}
                    alt={images['project/project3.jpg'].name}
                    draggable="false"
                  />
                </a>
              </div>
            </div>

            <div className="project__text-container">
              <div className="project__tags">Analytics, UX, UI, Front-end</div>
              <h3 className="project__title">
                <a href="https://www.behance.net/gallery/70303073/Glance-Clock-First-Smart-Clock">
                  Indiegogo superstar smart clock which ease your life
                </a>
              </h3>
              <a
                className="project__link"
                href="https://www.behance.net/gallery/70303073/Glance-Clock-First-Smart-Clock"
                target="_blank"
                rel="noopener noreferrer"
              >
                MORE INFO
              </a>
              <div className="project__review-container">
                <img
                  className="project__avatar"
                  src={images['avatar1.jpg'].url}
                  alt={images['avatar1.jpg'].name}
                  draggable="false"
                />
                <div>
                  <p className="project__review">Highly recommend!</p>
                  <p className="project__author">Jon-Paul Wheatley, CPO</p>
                </div>
              </div>
            </div>
          </div>
          <ul className="project__partners-list">
            <li className="project__partners-item">
              <img
                src={images['partners/forbes.svg'].url}
                alt={images['partners/forbes.svg'].name}
                draggable="false"
              />
            </li>
            <li className="project__partners-item">
              <img
                src={images['partners/techcrunch.svg'].url}
                alt={images['partners/techcrunch.svg'].name}
                draggable="false"
              />
            </li>
            <li className="project__partners-item">
              <img
                src={images['partners/mashable.svg'].url}
                alt={images['partners/mashable.svg'].name}
                draggable="false"
              />
            </li>
            <li className="project__partners-item">
              <img
                src={images['partners/indiegogo.svg'].url}
                alt={images['partners/indiegogo.svg'].name}
                draggable="false"
              />
            </li>
          </ul>
        </div>
      </div>

      {navigation ? (
        <div className="projects__others">
          <div className="projects__others-container">
            <div className="projects__others-title">And others</div>

            <div className="projects__others-block">
              <div className="projects__others-item jackandjones-item">
                <img
                  src={images['jackandjones.svg'].url}
                  alt={images['jackandjones.svg'].name}
                  draggable="false"
                />
              </div>
              <div className="projects__others-item udemy-item">
                <img
                  src={images['udemy.svg'].url}
                  alt={images['udemy.svg'].name}
                />
              </div>
              <div className="projects__others-item luzern-item">
                <img
                  src={images['kkl-luzern.svg'].url}
                  alt={images['kkl-luzern.svg'].name}
                />
              </div>
              <div className="projects__others-item">
                <Link to="/portfolio">
                  <span>
                    view
                    <br />
                    all
                    <br />
                    cases
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
};

Projects.propTypes = {
  navigation: PropTypes.bool,
  title: PropTypes.string,
};

export default Projects;
