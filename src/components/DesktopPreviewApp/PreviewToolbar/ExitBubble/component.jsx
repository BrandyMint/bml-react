import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import SuperBubble from 'components/ui-elements/SuperBubble';

import Icon from 'react-icons/lib/go/screen-normal';
// import Icon from 'react-icons/lib/md/build';

const ExitBubble = ({ variantUuid }) => (
  <Link
    to={`/editor/${variantUuid}`}
    data-tip="Переход в конструктор"
    className="IconLink"
  >
    <SuperBubble className="SuperBubble--unobtrusive">
      <Icon className="SuperBubble--icon" />
    </SuperBubble>
  </Link>
);

ExitBubble.propTypes = {
  variantUuid: PropTypes.string.isRequired,
};

export default ExitBubble;
