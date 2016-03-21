import React, { PropTypes } from 'react';
import Icon from 'react-icons/lib/go/device-mobile';

const DesktopPreviewBubble = ({ variantUuid }) => (
  <Link
    to={`/editor/${variantUuid}/mobilePreview`}
    data-tip="Предпросмотр сайта на экране телефона"
    className="IconLink"
  >
    <SuperBubble>
      <Icon className="SuperBubble--icon"/>
    </SuperBubble>
  </Link>
);

DesktopPreviewBubble.propTypes = {
  variantUuid: PropTypes.string.isRequired;
};

export default DesktopPreviewBubble;
