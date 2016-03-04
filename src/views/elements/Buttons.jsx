import React, { PropTypes } from 'react';
import Button from 'views/elements/Button';
import customPropTypes from 'constants/customPropTypes'
import classnames from 'classnames'
import map from 'lodash/map';
import size from 'lodash/size';

const Buttons = (props) => {
  const { buttons, className } = props;

  if (size(buttons) == 0) {
    return null;
  }

  const classNames = classnames("BML-buttons-group", className);

  return (<div className={classNames}>
               {map(buttons, (button, index) =>
                  (<Button {...button} key={index} className="BML-button-item" />))
               }
           </div>);
}

Buttons.propTypes = {
  buttons: PropTypes.arrayOf(customPropTypes.link).isRequired,
  className: PropTypes.string,
}

export default Buttons;
