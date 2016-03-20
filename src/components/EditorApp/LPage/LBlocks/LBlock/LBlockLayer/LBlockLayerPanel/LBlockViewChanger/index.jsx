import React, { PropTypes } from 'react';

import BubbleIcon from 'components/ui-elements/BubbleIcon';
import ReactTooltip from 'react-tooltip';

import Icon from 'react-icons/lib/md/autorenew';

import './LBlockViewChanger.css';

const LBlockViewChanger = ({ onViewSwitchNext }) => (
  <div className="LBlockViewChanger">
    <div data-tip="Смена вида">
      <BubbleIcon onClick={onViewSwitchNext}>
        <Icon />
      </BubbleIcon>
    </div>
    <ReactTooltip />
  </div>
);

LBlockViewChanger.propTypes = {
  onViewSwitchNext: PropTypes.func.isRequired,
  // onViewSwitchPrev: PropTypes.func.isRequired,
};

export default LBlockViewChanger;
