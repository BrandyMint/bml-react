import './LBlockPositionChanger.css';

import React, { PropTypes } from 'react';

import ReactTooltip from 'react-tooltip';
import BubbleIcon from 'components/ui-elements/BubbleIcon';

import IconUp from 'react-icons/lib/go/chevron-up';
import IconDown from 'react-icons/lib/go/chevron-down';

const LBlockPositionChanger = ({ onBlockPositionUp, onBlockPositionDown }) => (
  <div className="LBlockPositionChanger">
    <span data-tip="Переместить блок наверх">
      <BubbleIcon onClick={onBlockPositionUp}>
        <IconUp />
      </BubbleIcon>
    </span>
    <ReactTooltip />
    <span data-tip="Переместить блок вниз">
      <BubbleIcon onClick={onBlockPositionDown}>
        <IconDown />
      </BubbleIcon>
    </span>
    <ReactTooltip />
  </div>
);

LBlockPositionChanger.propTypes = {
  onBlockPositionDown: PropTypes.func.isRequired,
  onBlockPositionUp: PropTypes.func.isRequired,
};

export default LBlockPositionChanger;
