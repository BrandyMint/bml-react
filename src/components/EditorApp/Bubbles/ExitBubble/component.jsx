import React, { PropTypes } from 'react';
import { translate } from 'react-i18next';

import SuperBubble from 'components/ui-elements/SuperBubble';

import Icon from 'react-icons/lib/md/close';

import config from 'constants/config';

const ExitBubble = ({ t }) => (
  <a
    href={config('exitUrl')}
    rel="external"
    data-tip={t('tips:exit_bubble')}
    className="IconLink"
  >
    <SuperBubble>
      <Icon className="SuperBubble--icon" />
    </SuperBubble>
  </a>
);

ExitBubble.propTypes = {
  t: PropTypes.func.isRequired,
}

export default translate('')(ExitBubble);
