import React from 'react';
import { animated, useSpring } from 'react-spring';

import styles from './ProjectMain.module.scss';
import { node, object, bool } from 'prop-types';

const ProjectMain = ({ description, content, refName, status }) => {
  const wrapSpring = useSpring({ opacity: status ? 1 : 0 });

  return (
    <animated.div style={{ opacity: wrapSpring.opacity }}>
      <div ref={refName} className={styles.main}>
        <div className={styles.container}>
          <div className={styles.about}>
            <div className={styles.row}>
              <div className={styles.head}>
                <div className={styles.subtitle}>
                  <h2>About project</h2>
                </div>
                <ul className={styles.tags}>
                  <li>WEB DESIGN</li>
                  <li>WEB DEVELOPMENT</li>
                </ul>
              </div>
              <div
                className={styles.description}
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
          </div>
          <div className={styles.link}>
            <a href="www.prosapient.com">www.prosapient.com</a>
          </div>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </animated.div>
  );
};

ProjectMain.propTypes = {
  description: node.isRequired,
  refName: object.isRequired,
  content: node.isRequired,
  status: bool.isRequired,
};

export default ProjectMain;
