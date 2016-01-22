import './OperatorPanel.css';

import React, { PropTypes } from 'react';

import Bubble from 'components/ui-elements/Bubble';

const OperatorPanel = ({ exitUrl }) => (
  <div className="OperatorPanel">
    <Bubble icon="times" url={exitUrl} />
  </div>
);

OperatorPanel.propTypes = {
  exitUrl: PropTypes.string,
};

export default OperatorPanel;