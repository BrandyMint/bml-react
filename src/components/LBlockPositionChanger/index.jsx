import './LBlockPositionChanger.css';

import React, { PropTypes } from 'react';

import Bubble from 'components/ui-elements/Bubble';

const LBlockPositionChanger = ({ onBlockPositionUp, onBlockPositionDown }) => (
  <div className="LBlockPositionChanger">
    <Bubble icon="angle-up" onClick={onBlockPositionUp} />
    <Bubble icon="angle-down" onClick={onBlockPositionDown} />
  </div>
);

LBlockPositionChanger.propTypes = {
  onBlockPositionDown: PropTypes.func.isRequired,
  onBlockPositionUp: PropTypes.func.isRequired,
};

export default LBlockPositionChanger;