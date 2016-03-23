import React, { PropTypes } from 'react';

import Tracker from 'components/Tracker';
import Themer from 'components/Themer';

import Page from './Page';

const ShowApp = ({ children, className }) => (
  <Tracker>
    <Themer>
      <Page className={className} />
      {children}
    </Themer>
  </Tracker>
);

ShowApp.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element), // Например сюда передаются Toolbar-ы при preview
};

export default ShowApp;
