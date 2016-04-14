import React, { PropTypes } from 'react';
import { translate } from 'react-i18next';

import Icon from 'react-icons/lib/md/desktop-windows';
import { Link } from 'react-router';
import SuperBubble from 'components/ui-elements/SuperBubble';

const DesktopPreviewBubble = ({ t, variantUuid }) => (
  <Link
    to={`/editor/${variantUuid}/preview`}
    data-tip={t('tips:desktop_preview_bubble')}
    className="IconLink"
  >
    <SuperBubble>
      <Icon className="SuperBubble--icon" />
    </SuperBubble>
  </Link>
);

DesktopPreviewBubble.propTypes = {
  t: PropTypes.func.isRequired,
  variantUuid: PropTypes.string.isRequired,
};

export default translate('')(DesktopPreviewBubble);
