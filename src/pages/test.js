import React from 'react';

import Ticker from '@components/Ticker';

const Test = () => {
  const items = [
    { id: '0', title: 'First' },
    { id: '1', title: 'Second' },
    { id: '2', title: 'Third' },
    { id: '3', title: 'Fourth' },
    { id: '4', title: 'Fifth' },
    { id: '5', title: 'Sixth' },
    { id: '6', title: 'Seventh' },
    { id: '7', title: 'Eighth' },
  ];

  return (
    <div>
      <div>Test</div>
      {/* <div style={{ maxWidth: '450px', margin: '0 auto' }}> */}
      <Ticker items={items} />
      {/* </div> */}
    </div>
  );
};

export default Test;
