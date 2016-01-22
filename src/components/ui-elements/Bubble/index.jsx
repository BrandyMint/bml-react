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
    const { children, icon, text, onClick, url } = this.props;
    const bubbleClasses = classnames({
      'Bubble': true,
      'Bubble--withText': !!text,
      'Bubble--withIcon': !!icon,
    });

    return (
      <a
        className={bubbleClasses}
        href={url || '#'}
        onClick={this.handleClick}
      >
        {!!text && <span className="Bubble-text">{text}</span>}
        {!!icon && (
          <span className="Bubble-icon">
            <Icon glyph={icon} />
          </span>
        )}
        {!text && !icon && children}
      </a>
    );
  }
}

Bubble.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
  url: PropTypes.string,
};

export default Bubble;