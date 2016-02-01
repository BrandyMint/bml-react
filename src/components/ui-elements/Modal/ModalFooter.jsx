import React from 'react';
import classnames from 'classnames';

const ModalFooter = ({ children, className }) => (
  <div className={classnames('modal-footer', className)}>
    {children}
  </div>
);

export default ModalFooter;
