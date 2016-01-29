import './LBlockAddButton.css';

import React, { PropTypes } from 'react';

import Icon from 'components/ui-elements/Icon';

const LBlockAddButton = ({ onClick }) => (
  <div className="LBlockAddButton">
    <div className="LBlockAddButton-handle" onClick={onClick}>
      <Icon glyph="plus" />
    </div>
  </div>
);

LBlockAddButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LBlockAddButton;
