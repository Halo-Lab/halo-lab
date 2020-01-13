import React, { useContext } from 'react';
import { Link } from 'gatsby';

import { GlobalContext } from '@contexts';

import './Projects.scss';

const Projects = () => {
  const { images } = useContext(GlobalContext);

  const project1Image = images.getItem('project/project1.jpg');
  const project2Image = images.getItem('project/project2.jpg');
  const project3Image = images.getItem('project/project3.jpg');
  const avatar1Image = images.getItem('avatar1.jpg');
  const forbesIcon = images.getItem('partners/forbes.svg');
  const mashableIcon = images.getItem('partners/mashable.svg');
  const indiegogoIcon = images.getItem('partners/indiegogo.svg');
  const techcrunchIcon = images.getItem('partners/techcrunch.svg');
  const vcRuIcon = images.getItem('partners/vc.ru.svg');
  const angellistIcon = images.getItem('partners/angellist.svg');
  const jackandjonesImage = images.getItem('jackandjones.svg');
  const udemy = images.getItem('udemy.svg');
  const kklLuzern = images.getItem('kkl-luzern.svg');

  return (
    <section className="section section__projects">
      <h2 className="portfolio__title">Projects</h2>

      <div className="portfolio__project">
        <div className="project">
          <div className="project__container">
            <div className="project__media-container">
              <div className="project__image-container">
                <a href="https://www.behance.net/gallery/65940547/Primary-Smart-Bedding-Website">
                  <img
                    src={project1Image.url}
                    alt={project1Image.name}
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
                  src={avatar1Image.url}
                  alt={avatar1Image.name}
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
                src={forbesIcon.url}
                alt={forbesIcon.name}
                draggable="false"
              />
            </li>
            <li className="project__partners-item">
              <img
                src={mashableIcon.url}
                alt={mashableIcon.name}
                draggable="false"
              />
            </li>
            <li className="project__partners-item">
              <img
                src={indiegogoIcon.url}
                alt={indiegogoIcon.name}
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
                    src={project2Image.url}
                    alt={project2Image.name}
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
                  src={avatar1Image.url}
                  alt={avatar1Image.name}
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
                src={forbesIcon.url}
                alt={forbesIcon.name}
                draggable="false"
              />
            </li>
            <li className="project__partners-item">
              <img
                src={techcrunchIcon.url}
                alt={techcrunchIcon.name}
                draggable="false"
              />
            </li>
            <li className="project__partners-item">
              <img src={vcRuIcon.url} alt={vcRuIcon.name} draggable="false" />
            </li>
            <li className="project__partners-item">
              <img
                src={angellistIcon.url}
                alt={angellistIcon.name}
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
                    src={project3Image.url}
                    alt={project3Image.name}
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
                  src={avatar1Image.url}
                  alt={avatar1Image.name}
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
                src={forbesIcon.url}
                alt={forbesIcon.name}
                draggable="false"
              />
            </li>
            <li className="project__partners-item">
              <img
                src={techcrunchIcon.url}
                alt={techcrunchIcon.name}
                draggable="false"
              />
            </li>
            <li className="project__partners-item">
              <img
                src={mashableIcon.url}
                alt={mashableIcon.name}
                draggable="false"
              />
            </li>
            <li className="project__partners-item">
              <img
                src={indiegogoIcon.url}
                alt={indiegogoIcon.name}
                draggable="false"
              />
            </li>
          </ul>
        </div>
      </div>

      <div className="projects__others">
        <div className="projects__others-container">
          <div className="projects__others-title">And others</div>

          <div className="projects__others-block">
            <div className="projects__others-item jackandjones-item">
              <img
                src={jackandjonesImage.url}
                alt={jackandjonesImage.name}
                draggable="false"
              />
            </div>
            <div className="projects__others-item udemy-item">
              <img src={udemy.url} alt={udemy.name} />
            </div>
            <div className="projects__others-item luzern-item">
              <img src={kklLuzern.url} alt={kklLuzern.name} />
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
    </section>
  );
};

export default Projects;
