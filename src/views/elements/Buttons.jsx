import React, { Component, PropTypes } from 'react';
import Button from 'views/elements/Button';
import classnames from 'classnames';
import map from 'lodash/map';
import size from 'lodash/size';

class Buttons extends Component {
  render() {
    const { buttons, className } = this.props;

    if (size(buttons) === 0) {
      return (<noscript />);
    }

    const classNames = classnames('BML-buttons-group', className);
    // <ul className="list-inline MustRead3-buttons">
    // (<li className="list-inline-item" key={index}>

    return (
      <div className={classNames}>
        {map(buttons, (button, index) =>
          (<Button {...button} key={index} className="BML-button-item" />)
        )}
      </div>
    );
  }
}

export const buttonsPropTypes = PropTypes.arrayOf(
  PropTypes.shape(Button.propTypes)
).isRequired;

Buttons.propTypes = {
  buttons: buttonsPropTypes,
  className: PropTypes.string,
};

export default Buttons;
