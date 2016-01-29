import React, { Component, PropTypes } from 'react';

import Body from './ModalBody';
import Footer from './ModalFooter';
import Header from './ModalHeader';
import Title from './ModalTitle';

class Modal extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.show !== this.props.show) {
      if (this.props.show) {
        document.body.classList.add('modal-open');
      } else {
        document.body.classList.remove('modal-open');
      }
    }
  }
  render() {
    const { children, show } = this.props;

    if (show) {
      return (
        <span>
          <div className="modal" style={{ display: show ? 'block' : 'none' }}>
            <div className="modal-dialog">
              <div className="modal-content">
                {children}
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade in" />
        </span>
      );
    }

    return false;
  }
}

Modal.Body = Body;
Modal.Footer = Footer;
Modal.Header = Header;
Modal.Title = Title;

Modal.propTypes = {
  children: PropTypes.node,
  show: PropTypes.bool.isRequired,
};

export default Modal;
