import React from 'react';
import { Location } from '@reach/router';
import { object } from 'prop-types';
import Title from './components/Title';
import ErrResponse from './components/ErrResponse';
const ThanksPage = ({ location }) => {
  const {
    state: { status },
  } = location;
  // return <div>{status === 200 ? <Title /> : <ErrResponse />}</div>;
  return (
    <div>
      <ErrResponse />
    </div>
  );
};

ThanksPage.propTypes = {
  location: object,
};

export default function Wrapper() {
  return (
    <Location>{locationProps => <ThanksPage {...locationProps} />}</Location>
  );
}
