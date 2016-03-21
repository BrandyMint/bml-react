import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import './index.scss';

class SuperBubble extends Component {
  getDataAttributes(data) {
    if (data) {
      return data.reduce((acc, attr) => ({
        ...acc,
        [`data-${attr}`]: true,
      }), {});
    }
  }
  handleClick(ev) {
    if (this.props.onClick) {
      ev.preventDefault();
      this.props.onClick();
    }
  }
  render() {
    const { children, className, count, data, text, url } = this.props;
    const bubbleClasses = classNames('SuperBubble', {
      'SuperBubble--with-text': !!text,
    }, className);


    const onClick = this.handleClick.bind(this);

    return (
      <div
        {...this.getDataAttributes(data)}
        className={bubbleClasses}
        href={url || '#'}
        onClick={onClick}
      >
        {!!text && <span className="SuperBubble-text">{text}</span>}
        {!!count && <span className="SuperBubble-count">{count}</span>}
        {children}
      </div>
    );
  }
}

SuperBubble.propTypes = {
  className: PropTypes.string,
  count: PropTypes.number,
  data: PropTypes.array,
  onClick: PropTypes.func,
  text: PropTypes.string,
  url: PropTypes.string,
  children: PropTypes.element,
};

export default SuperBubble;
