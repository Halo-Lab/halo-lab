import React from 'react';

import ModalWrapper from '@components/ModalWrapper';

const Test = () => {
  return (
    <div>
      <div>Test</div>
      <ModalWrapper
        button={{
          title: 'Click me, click',
        }}
      >
        <div>Modal content is Here</div>
      </ModalWrapper>
    </div>
  );
};

export default Test;
