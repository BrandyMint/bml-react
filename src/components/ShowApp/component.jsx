import React, { PropTypes } from 'react';

import Tracker from 'components/Tracker';
import Themer from 'components/Themer';

import Page from './Page';

const ShowApp = ({ blocks, children, className }) => (
  <Tracker>
    <Themer>
      <Page blocks={blocks} className={className} />
      {children}
    </Themer>
  </Tracker>
);

ShowApp.propTypes = {
  blocks: PropTypes.array.isRequired,
  children: PropTypes.arrayOf(PropTypes.element), // Например сюда передаются Toolbar-ы при preview
};

export default ShowApp;
