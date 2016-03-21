import React, { PropTypes } from 'react';
import Icon from 'react-icons/lib/go/device-mobile';
import { Link } from 'react-router';
import SuperBubble from 'components/ui-elements/SuperBubble';
import ReactTooltip from 'react-tooltip';

const MobilePreviewBubble = ({ variantUuid }) => (
  <Link
    to={`/editor/${variantUuid}/mobilePreview`}
    data-tip="Предпросмотр сайта на экране телефона"
    className="IconLink"
  >
    <SuperBubble>
      <Icon className="SuperBubble--icon"/>
    </SuperBubble>
    <ReactTooltip />
  </Link>
);

MobilePreviewBubble.propTypes = {
  variantUuid: PropTypes.string.isRequired,
};

export default MobilePreviewBubble;
