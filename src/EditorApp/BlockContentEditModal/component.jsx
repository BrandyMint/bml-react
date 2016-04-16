import React, { PropTypes, Component } from 'react';

import ContentSchemaForm from 'components/ContentSchemaForm';
import Modal from './Modal'

class BlockContentEditModal extends Component {
  render () {
    const { uuid, open } = this.props;

    if (!open) {
      return null;
    }
    return (
      <Modal open={open}>
        <ContentSchemaForm uuid={uuid} />
      </Modal>
    );
  }
}

BlockContentEditModal.propTypes = {
  open: PropTypes.bool.isRequired,
  // TODO перенести в ContentSchemaFOrm?
  uuid: PropTypes.string,
};

export default BlockContentEditModal;
