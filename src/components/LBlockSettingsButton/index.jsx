import React, { Component, PropTypes } from 'react';

import './LBlockSettingsButton.css';

import Bubble from 'components/ui-elements/Bubble';
import Icon from 'components/ui-elements/Icon';

const LBlockSettingsButton = ({ onEditStart }) => (
  <div className="LBlockSettingsButton">
    <Bubble icon="cog" />
  </div>
);

export default LBlockSettingsButton;