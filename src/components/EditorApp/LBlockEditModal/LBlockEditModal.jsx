import React, { PropTypes } from 'react';

import Modal from 'components/ui-elements/Modal';
import LBlockEditForm from './LBlockEditForm';

const LBlockEditModal = ({ block, isVisible, onCancel, onDelete, onSave }) => (
  <Modal show={isVisible} className="modal EditorModal LBlockEditModal">
    <Modal.Header closeButton onHide={onCancel}>
      <Modal.Title>Редактирование блока {block.viewName}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <LBlockEditForm />
    </Modal.Body>
    <Modal.Footer>
      <button
        className="btn btn-danger"
        type="button"
        onClick={onDelete}
      >
        Удалить
      </button>
      <button
        className="btn btn-primary"
        type="button"
        onClick={onSave}
      >
        OK
      </button>
    </Modal.Footer>
  </Modal>
);

LBlockEditModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,

  onCancel: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,

  block: PropTypes.object.isRequired,
};

export default LBlockEditModal;
