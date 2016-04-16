import React, { PropTypes, Component } from 'react';

import ContentSchemaForm from 'components/ContentSchemaForm';
import Modal from './Modal'

class BlockContentEditModal extends Component {
  render () {
    const { uuid, open } = this.props;

    console.log("Render EditModal", open);
    return (
      <Modal open={open}>
        { open && <ContentSchemaForm uuid={uuid} /> }
      </Modal>
    );
  }
}

BlockContentEditModal.propTypes = {
  open: PropTypes.bool.isRequired,
  uuid: PropTypes.string,
};

export default BlockContentEditModal;
