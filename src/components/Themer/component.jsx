import React, { PropTypes } from 'react';
import BodyClassName from 'react-body-classname';

const Themer = ({ className, theme, children }) =>
  (
    <BodyClassName className={theme.class}>
      <div className={className}>
        {children}
      </div>
    </BodyClassName>
  );

Themer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  theme: PropTypes.object.isRequired,
};

export default Themer;
