import React, { Component, PropTypes } from 'react';

import './LBlockSettingsButton.css';

const LBlockSettingsButton = ({ onEditStart }) => (
  <div className="LBlockSettingsButton" onClick={onEditStart}>
    Settings
  </div>
);

LBlockSettingsButton.propTypes = {

};

export default LBlockSettingsButton;