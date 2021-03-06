import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';

import bind from 'lodash/bind';

import './Bubble.css';

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
    const { children, hasIcon, text, to, isActive, isProcessing, isBlank } = this.props;
    const bubbleClasses = classnames({
      Bubble: true,
      'Bubble--blank': isBlank,
      'Bubble--withText': !!text,
      'Bubble--withIcon': !!hasIcon,
      'is-processing': isProcessing,
      'is-active': isActive,
    });

    if (to) {
      return (
        <Link
          className={bubbleClasses}
          to={to}
        >
          {children}
          {!!text && <span className="Bubble-text">{text}</span>}
        </Link>
      );
    }
    return (
      <span
        className={bubbleClasses}
        onClick={this.handleClick}
      >
        {children}
        {!!text && <span className="Bubble-text">{text}</span>}
      </span>
    );
  }
}

Bubble.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  hasIcon: PropTypes.bool,
  onClick: PropTypes.func,
  text: PropTypes.string,
  to: PropTypes.string,
  url: PropTypes.string,
  isProcessing: PropTypes.bool,
  isActive: PropTypes.bool,
  isBlank: PropTypes.bool,
};

export default Bubble;
