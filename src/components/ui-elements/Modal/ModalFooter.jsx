import React, { PropTypes } from 'react';
import classnames from 'classnames';

const ModalFooter = ({ children, className }) => (
  <h4 className={classnames('modal-footer', className)}>
    {children}
  </h4>
);

export default ModalFooter;