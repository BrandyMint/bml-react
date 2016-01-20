import React, { Children, PropTypes } from 'react';
import classnames from 'classnames';

import './Bubble.css';

import Icon from 'components/ui-elements/Icon';

const Bubble = ({ children, icon, text }) => {
  const bubbleClasses = classnames({
    'Bubble': true,
    'Bubble--withText': Boolean(text),
    'Bubble--withIcon': Boolean(icon),
  });

  return (
    <div className={bubbleClasses}>
      {!!text && <span className="Bubble-text">{text}</span>}
      {!!icon && (
        <span className="Bubble-icon">
          <Icon glyph={icon} />
        </span>
      )}
      {!text && !icon && children}
    </div>
  );
};

Bubble.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string,
};

export default Bubble;