import React, { PropTypes } from 'react';

import './index.scss';

const ColorSubBubble = ({ color }) => (
  <div className="ColorSubBubble" style={{ backgroundColor: color }} />
);

ColorSubBubble.propTypes = {
  color: PropTypes.string.isRequired,
};

export default ColorSubBubble;
