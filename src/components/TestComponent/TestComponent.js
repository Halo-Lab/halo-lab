import React, { useState, useContext } from 'react';
import Ticker from 'react-ticker';
import { GlobalContext } from '@contexts';

const TestComponent = () => {
  const [move, setMove] = useState(false);
  const [direction, setDirection] = useState('toRight');
  // const { imagesAPI } = useContext(GlobalContext);
  // const images = imagesAPI.getArray([
  //   'gallery/1.jpg',
  //   'gallery/2.jpg',
  //   'gallery/3.jpg',
  //   'gallery/4.jpg',
  //   'gallery/5.jpg',
  //   'gallery/6.jpg',
  //   'gallery/7.jpg',
  //   'gallery/8.jpg',
  //   'gallery/9.jpg',
  //   'gallery/10.jpg',
  //   'gallery/11.jpg',
  //   'gallery/12.jpg',
  //   'gallery/13.jpg',
  // ]);
  // console.log(images);

  const handleSetMove = () => {
    setMove(move => !move);
  };
  const handleSetDirection = () => {
    setDirection(direction => (direction === 'toRight' ? 'toLeft' : 'toRight'));
  };

  return (
    <div>
      <div>TestComponent</div>
      {/* <Ticker direction="toRight" offset="0%" speed={10} move={true}>
        {() => {
          return (
            <ul>
              {images.map(({ url, name }) => {
                return (
                  <li key={url}>
                    <img src={url} alt={name} draggable="false" />
                  </li>
                );
              })}
            </ul>
          );
        }}
      </Ticker> */}
      <Ticker direction={direction} offset="100%" speed={10} move={move}>
        {index => <h1>React-Ticker</h1>}
      </Ticker>
      <button onClick={handleSetMove}>Run/Stop</button>
      <div>
        <button onClick={handleSetDirection}>Change direction</button>
        {direction}
      </div>
    </div>
  );
};

export default TestComponent;
