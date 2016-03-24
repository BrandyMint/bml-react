import React, { PropTypes } from 'react';

import './LBlockSettingsButton.css';

import FaCog from 'react-icons/lib/fa/cog';

import BubbleIcon from 'components/ui-elements/BubbleIcon';

const LBlockSettingsButton = ({ onEditingStart }) => (
  <div className="LBlockSettingsButton">
    <div data-tip="Настройка блока">
      <BubbleIcon onClick={onEditingStart}>
        <FaCog />
      </BubbleIcon>
    </div>
  </div>
);

LBlockSettingsButton.propTypes = {
  onEditingStart: PropTypes.func.isRequired,
};

export default LBlockSettingsButton;
