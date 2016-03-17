import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Themer = ({ className, theme, children }) => {
  const classNames = classnames(className, theme.class);
  return (
    <div className={classNames}>
      {children}
    </div>
  );
};

Themer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  theme: PropTypes.object.isRequired,
};

export default Themer;
