import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Themer = ({ className, theme, children }) =>
  (
    <div className={classnames(className, theme.class)}>
      {children}
      </div>
  );

Themer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  theme: PropTypes.object.isRequired,
};

export default Themer;
