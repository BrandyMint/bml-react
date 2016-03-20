import React from 'react';
import ReactTooltip from 'react-tooltip';
import Icon from 'react-icons/lib/md/exit-to_app';

import config from 'constants/config';

const ExitLink = () => (
  <div>
    <a
      href={config('exitUrl')}
      rel="external"
      data-tip="Выход из конструктора"
      className="IconLink"
    >
      <Icon />
    </a>
    <ReactTooltip />
  </div>
);

export default ExitLink;
