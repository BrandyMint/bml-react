import React, { Component, PropTypes } from 'react';
import BodyClassName from 'react-body-classname';

import Body from './ModalBody';
import Footer from './ModalFooter';
import Header from './ModalHeader';
import Title from './ModalTitle';

class Modal extends Component {
  render() {
    const { children, show, className } = this.props;

    if (show) {
      return (
        <BodyClassName className="modal-open">
          <span>
            <div className={className} style={{ display: show ? 'block' : 'none' }}>
              <div className="modal-dialog">
                <div className="modal-content">
                  {children}
                </div>
              </div>
            </div>
            <div className="modal-backdrop fade in" />
          </span>
        </BodyClassName>
      );
    }

    return false;
  }
}

Modal.Body = Body;
Modal.Footer = Footer;
Modal.Header = Header;
Modal.Title = Title;

Modal.defaultProps = {
  className: 'modal',
};

Modal.propTypes = {
  children: PropTypes.node,
  show: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

export default Modal;
