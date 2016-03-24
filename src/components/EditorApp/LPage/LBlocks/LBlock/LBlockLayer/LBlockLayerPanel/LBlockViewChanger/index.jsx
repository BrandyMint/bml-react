import React, { PropTypes } from 'react';

import BubbleIcon from 'components/ui-elements/BubbleIcon';

import Icon from 'react-icons/lib/md/shuffle';

import './LBlockViewChanger.css';

const LBlockViewChanger = ({ onViewSwitchNext }) => (
  <div className="LBlockViewChanger">
    <div data-tip="Смена вида">
      <BubbleIcon onClick={onViewSwitchNext}>
        <Icon />
      </BubbleIcon>
    </div>
  </div>
);

LBlockViewChanger.propTypes = {
  onViewSwitchNext: PropTypes.func.isRequired,
  // onViewSwitchPrev: PropTypes.func.isRequired,
};

export default LBlockViewChanger;
