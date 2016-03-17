import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Themer = ({ className, children }) => {
  const classNames = classnames(className, 'Theme-green');
  console.log("Themer", classNames);
  return (
    <div className={classNames}>
      {children}
    </div>
  );
};

Themer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Themer;

