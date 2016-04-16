import React, { PropTypes, Component } from 'react';

import ContentSchemaForm from 'components/ContentSchemaForm';
import Modal from './Modal'
import Animated from 'components/primitives/Animated';

class BlockContentEditModal extends Component {
  render () {
    const { uuid, open } = this.props;
    return (
      <Animated>
        <Modal open={open}>
          <ContentSchemaForm uuid={uuid} />
        </Modal>
      </Animated>
    );
  }
}

BlockContentEditModal.propTypes = {
  open: PropTypes.bool.isRequired,
  // TODO перенести в ContentSchemaFOrm?
  uuid: PropTypes.string,
};

export default BlockContentEditModal;
