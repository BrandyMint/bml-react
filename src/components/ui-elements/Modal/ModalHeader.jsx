import React, { PropTypes } from 'react';
import classnames from 'classnames';

const ModalHeader = ({ children, className, closeButton, onHide }) => (
  <div className={classnames('modal-header', className)}>
    {closeButton &&
      <button
        type="button"
        className="close"
        onClick={onHide}
      >
        <span>&times;</span>
      </button>
    }
    {children}
  </div>
);

ModalHeader.propTypes = {
  closeButton: PropTypes.bool,
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
  onHide: PropTypes.func,
};

export default ModalHeader;
