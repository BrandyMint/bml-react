import React, { PropTypes } from 'react';
import classnames from 'classnames';

const ModalHeader = ({ children, className }) => (
  <div className={classnames('modal-header', className)}>
    {children}
  </div>
);

export default ModalHeader;