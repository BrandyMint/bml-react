import React, { PropTypes } from 'react';

import './LBlockSettingsButton.css';

import FaCog from 'react-icons/lib/fa/cog';

import BubbleIcon from 'components/ui-elements/BubbleIcon';

const LBlockSettingsButton = ({ onEditingStart }) => (
  <div className="LBlockSettingsButton">
    <BubbleIcon onClick={onEditingStart}>
      <FaCog />
    </BubbleIcon>
  </div>
);

LBlockSettingsButton.propTypes = {
  onEditingStart: PropTypes.func.isRequired,
};

export default LBlockSettingsButton;
