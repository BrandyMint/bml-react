import React, { Component, PropTypes } from 'react';
import times from 'lodash/times';

import './index.scss';

const BaselineGrid = () => (
  <div className="BaselineGrid">
    {times(200, (i) => <div key={i} className="BaselineGrid-guide"></div>)}
  </div>
)

// export default BaselineGrid;
export default () => (<div />);
