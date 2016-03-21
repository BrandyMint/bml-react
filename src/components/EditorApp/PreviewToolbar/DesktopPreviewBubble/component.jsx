import React, { PropTypes } from 'react';
import Icon from 'react-icons/lib/md/desktop-windows';
import { Link } from 'react-router';
import SuperBubble from 'components/ui-elements/SuperBubble';
import ReactTooltip from 'react-tooltip';

const DesktopPreviewBubble = ({ variantUuid }) => (
  <Link
    to={`/editor/${variantUuid}/preview`}
    data-tip="Предпросмотр сайта на экране компьютера"
    className="IconLink"
  >
    <SuperBubble>
      <Icon className="SuperBubble--icon"/>
    </SuperBubble>
    <ReactTooltip />
  </Link>
);

DesktopPreviewBubble.propTypes = {
  variantUuid: PropTypes.string.isRequired,
};

export default DesktopPreviewBubble;
