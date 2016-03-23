import React from 'react';

import SuperBubble from 'components/ui-elements/SuperBubble';

import Icon from 'react-icons/lib/md/close';

import config from 'constants/config';

const ExitBubble = () => (
  <a
    href={config('exitUrl')}
    rel="external"
    data-tip="Выход из конструктора"
    className="IconLink"
  >
    <SuperBubble>
      <Icon className="SuperBubble--icon"/>
    </SuperBubble>
  </a>
);

export default ExitBubble;
