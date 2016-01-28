import React, { PropTypes } from 'react';

import './LBlockSettingsButton.css';

import Bubble from 'components/ui-elements/Bubble';
import Icon from 'components/ui-elements/Icon';

const LBlockSettingsButton = ({ onEditingStart }) => (
  <div className="LBlockSettingsButton">
    <Bubble icon="cog" onClick={onEditingStart} />
  </div>
);

LBlockSettingsButton.propTypes = {
  onEditingStart: PropTypes.func.isRequired,
};

export default LBlockSettingsButton;