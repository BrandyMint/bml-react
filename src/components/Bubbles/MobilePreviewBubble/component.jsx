import React, { PropTypes } from 'react';
import Icon from 'react-icons/lib/go/device-mobile';
import { Link } from 'react-router';
import SuperBubble from 'components/ui-elements/SuperBubble';
import { translate } from 'react-i18next';

const MobilePreviewBubble = ({ t, variantUuid }) => (
  <Link
    to={`/editor/${variantUuid}/mobilePreview`}
    data-tip={t('tips:mobile_preview')}
    className="IconLink"
  >
    <SuperBubble>
      <Icon className="SuperBubble--icon" />
    </SuperBubble>
  </Link>
);

MobilePreviewBubble.propTypes = {
  t: PropTypes.func.isRequired,
  variantUuid: PropTypes.string.isRequired,
};

export default translate('')(MobilePreviewBubble);
