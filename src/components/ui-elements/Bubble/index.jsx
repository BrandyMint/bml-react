import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import bind from 'lodash/bind';

import './Bubble.css';

import Icon from 'components/ui-elements/Icon';

class Bubble extends Component {
  constructor(props) {
    super(props);

    this.handleClick = bind(this.handleClick, this);
  }
  handleClick(event) {
    if (this.props.onClick) {
      event.preventDefault();
      this.props.onClick();
    }
  }
  render() {
    const { children, hasIcon, text, url, isProcessing } = this.props;
    const bubbleClasses = classnames({
      Bubble: true,
      'Bubble--withText': !!text,
      'Bubble--withIcon': !!hasIcon,
      'is-processing': isProcessing,
    });

    return (
      <a
        className={bubbleClasses}
        href={url || '#'}
        onClick={this.handleClick}
      >
        {!!text && <span className="Bubble-text">{text}</span>}
        {children}
      </a>
    );
  }
}

Bubble.propTypes = {
  children: PropTypes.node,
  hasIcon: PropTypes.bool,
  onClick: PropTypes.func,
  text: PropTypes.string,
  url: PropTypes.string,
  isProcessing: PropTypes.bool,
};

export default Bubble;
