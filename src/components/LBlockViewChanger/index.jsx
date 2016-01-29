import React, { PropTypes } from 'react';

import './LBlockViewChanger.css';

import Bubble from 'components/ui-elements/Bubble';

const LBlockViewChanger = ({ onViewSwitchNext, onViewSwitchPrev }) => (
  <div className="LBlockViewChanger">
    <Bubble icon="angle-left" onClick={onViewSwitchPrev} />
    <Bubble icon="angle-right" onClick={onViewSwitchNext} />
  </div>
);

LBlockViewChanger.propTypes = {
  onViewSwitchNext: PropTypes.func.isRequired,
  onViewSwitchPrev: PropTypes.func.isRequired,
};

export default LBlockViewChanger;
