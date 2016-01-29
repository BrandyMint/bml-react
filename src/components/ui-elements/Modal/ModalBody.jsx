import React from 'react';
import classnames from 'classnames';

const ModalBody = ({ children, className }) => (
  <div className={classnames('modal-body', className)}>
    {children}
  </div>
);

export default ModalBody;
