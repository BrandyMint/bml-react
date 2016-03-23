import React, { PropTypes } from 'react';
import classnames from 'classnames';

const ModalBody = ({ children, className }) => (
  <div className={classnames('modal-body', className)}>
    {children}
  </div>
);

ModalBody.propTypes = {
  children: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default ModalBody;
