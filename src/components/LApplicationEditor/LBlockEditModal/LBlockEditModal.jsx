import React, { PropTypes } from 'react';

import Modal from 'components/ui-elements/Modal';
import LBlockEditForm from 'components/LBlockEditForm';

const LBlockEditModal = ({ block, isVisible, onCancel, onDelete, onSave }) => (
  <Modal show={isVisible} className="modal EditorModal LBlockEditModal">
    <Modal.Header closeButton onHide={onCancel}>
      <Modal.Title>Редактирование блока {block.view}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <LBlockEditForm />
    </Modal.Body>
    <Modal.Footer>
      <button
        className="btn btn-danger-outline"
        type="button"
        onClick={onDelete}
      >
        Удалить
      </button>
      <button
        className="btn btn-primary-outline"
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
};

export default LBlockEditModal;
