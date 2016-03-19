import React, { PropTypes } from 'react';

import Tracker from 'components/Tracker';
import Themer from 'components/Themer';

import Page from './Page';

const ShowApp = ({ blocks, className }) => (
  <Tracker>
    <Themer>
      <Page blocks={blocks} className={className} />
    </Themer>
  </Tracker>
);

ShowApp.propTypes = {
  blocks: PropTypes.array.isRequired,
};

export default ShowApp;
