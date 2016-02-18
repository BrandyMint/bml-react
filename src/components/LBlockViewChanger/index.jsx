import React, { PropTypes } from 'react';

import './LBlockViewChanger.css';

import BubbleIcon from 'components/ui-elements/BubbleIcon';

import IconRight from 'react-icons/go/chevron-right';
import IconLeft from 'react-icons/go/chevron-left';

const LBlockViewChanger = ({ onViewSwitchNext, onViewSwitchPrev }) => (
  <div className="LBlockViewChanger">
    <BubbleIcon onClick={onViewSwitchPrev}>
      <IconLeft />
    </BubbleIcon>
    <BubbleIcon onClick={onViewSwitchNext}>
      <IconRight />
    </BubbleIcon>
  </div>
);

LBlockViewChanger.propTypes = {
  onViewSwitchNext: PropTypes.func.isRequired,
  onViewSwitchPrev: PropTypes.func.isRequired,
};

export default LBlockViewChanger;
