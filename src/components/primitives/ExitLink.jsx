import React from 'react';

import config from 'constants/config';

import ExitIcon from 'react-icons/lib/go/graph';

const ExitLink = () => (
  <a href={config('exitUrl')} rel="external" className="IconLink">
    <ExitIcon />
  </a>
);

export default ExitLink;
