import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import Body from './ModalBody';
import Footer from './ModalFooter';
import Header from './ModalHeader';
import Title from './ModalTitle';

class Modal extends Component {
  componentDidUpdate(prevProps, prevState) {
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

export default Modal;

// <div className="modal-header">
//           <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//             <span aria-hidden="true">×</span>
//           </button>
//           <h4 className="modal-title" id="exampleModalLabel">New message</h4>
//         </div>

// <div className="modal-body">
//           <form>
//             <div className="form-group">
//               <label htmlFor="recipient-name" className="form-control-label">Recipient:</label>
//               <input type="text" className="form-control" id="recipient-name" />
//             </div>
//             <div className="form-group">
//               <label htmlFor="message-text" className="form-control-label">Message:</label>
//               <textarea className="form-control" id="message-text" />
//             </div>
//           </form>
//         </div>