import React, { useState, useEffect, useContext } from "react";

import { MenuContext } from "@contexts";

import "./Stars.scss";

// variables for scroll speed
const bigStarsScrollIndex = 3;
const smallStarsScrollIndex = 5;

const Stars = () => {
  const [ positionOfSmallStars, setPositionOfSmallStars ] = useState('');
  const [ positionOfBigStars, setPositionOfBigStars ] = useState('');
  const { isOpened } = useContext(MenuContext);

  const bigStarsState = isOpened ? 'active' : '';
  const smallStarsState = isOpened ? 'active-small' : '';
  const hiddenStarsState = isOpened ? 'active-hidden' : '';

  const handleScroll = () => {
    const newPositionOfSmallStars = `${(window.pageYOffset * -1) / smallStarsScrollIndex}px`;
    const newPositionOfBigStars = `${(window.pageYOffset * -1) / bigStarsScrollIndex}px`;

    setPositionOfSmallStars(newPositionOfSmallStars);
    setPositionOfBigStars(newPositionOfBigStars);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="stars-wrapper">
      <div className="big-stars-bg-wrap">
        <div
          className={`big-stars-bg ${bigStarsState}`}
          style={{ backgroundPositionY: positionOfBigStars }}
        ></div>
      </div>
      <div className={`hidden-stars ${hiddenStarsState}`}></div>
      <div className="small-stars-bg-wrap">
        <div
          className={`small-stars-bg ${smallStarsState}`}
          style={{ backgroundPositionY: positionOfSmallStars }}
        ></div>
      </div>
    </div>
  );
};

export default Stars;
