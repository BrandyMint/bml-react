import React, { PropTypes } from 'react';

import './LBlockViewChanger.css';

import BubbleIcon from 'components/ui-elements/BubbleIcon';
import FaCog from 'react-icons/lib/fa/cog';

import IconRight from 'react-icons/lib/go/chevron-right';
import IconLeft from 'react-icons/lib/go/chevron-left';

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
