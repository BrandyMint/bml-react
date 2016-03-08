import './LBlockPositionChanger.css';

import React, { PropTypes } from 'react';

import BubbleIcon from 'components/ui-elements/BubbleIcon';

import IconUp from 'react-icons/lib/go/chevron-up';
import IconDown from 'react-icons/lib/go/chevron-down';

const LBlockPositionChanger = ({ onBlockPositionUp, onBlockPositionDown }) => (
  <div className="LBlockPositionChanger">
    <BubbleIcon onClick={onBlockPositionUp}>
      <IconUp />
    </BubbleIcon>
    <BubbleIcon onClick={onBlockPositionDown}>
      <IconDown />
    </BubbleIcon>
  </div>
);

LBlockPositionChanger.propTypes = {
  onBlockPositionDown: PropTypes.func.isRequired,
  onBlockPositionUp: PropTypes.func.isRequired,
};

export default LBlockPositionChanger;
