import React, { PropTypes } from 'react';
import Icon from 'react-icons/lib/go/device-mobile';
import { Link } from 'react-router';
import SuperBubble from 'components/ui-elements/SuperBubble';

const MobilePreviewBubble = ({ variantUuid }) => (
  <Link
    to={`/editor/${variantUuid}/mobilePreview`}
    data-tip="Предпросмотр на экране телефона"
    className="IconLink"
  >
    <SuperBubble>
      <Icon className="SuperBubble--icon" />
    </SuperBubble>
  </Link>
);

MobilePreviewBubble.propTypes = {
  variantUuid: PropTypes.string.isRequired,
};

export default MobilePreviewBubble;
