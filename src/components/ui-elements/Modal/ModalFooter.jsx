import React, { PropTypes } from 'react';
import classnames from 'classnames';

const ModalFooter = ({ children, className }) => (
  <div className={classnames('modal-footer', className)}>
    {children}
  </div>
);

ModalFooter.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
}

export default ModalFooter;
