import React from 'react';

import './LBlockViewChanger.css';

import Bubble from 'components/ui-elements/Bubble';

const LBlockViewChanger = () => (
  <div className="LBlockViewChanger">
    <Bubble icon="angle-left" />
    <Bubble icon="angle-right" />
  </div>
);

export default LBlockViewChanger;

// import React, { Component, PropTypes } from 'react';

// import './LBlockSettingsButton.css';




// const LBlockSettingsButton = ({ onEditStart }) => (
//   <div className="LBlockSettingsButton">
//     <Bubble icon="cogs" />
//   </div>
// );

// LBlockSettingsButton.propTypes = {

// };

// export default LBlockSettingsButton;

