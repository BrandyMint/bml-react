import React, { PropTypes } from 'react';
import Button from 'views/elements/Button';
import customPropTypes from 'constants/customPropTypes'
import map from 'lodash/map';

const Buttons = (props) => {
  const { buttons } = props;

  return (<div className="BML-buttons-group">
               {map(buttons, (button, index) =>
                  (<Button {...button} key={index} className="BML-button-item" />))
               }
           </div>);
}

Buttons.propTypes = {
  buttons: PropTypes.arrayOf(customPropTypes.link).isRequired,
}

export default Buttons;
