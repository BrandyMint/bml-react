import React from 'react';
import { Link } from 'react-router';

import config from 'constants/config';

import ExitIcon from 'react-icons/lib/go/graph';

const ExitLink = () => (
  <Link to={config('exitUrl')} className="IconLink">
    <ExitIcon />
  </Link>
);

export default ExitLink;
