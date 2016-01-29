import React, { PropTypes } from 'react';

import Modal from 'components/ui-elements/Modal';
import LBlockEditForm from 'components/LBlockEditForm';

const LBlockEditModal = ({ isVisible, onCancel, onDelete }) => (
  <Modal show={isVisible}>
    <Modal.Header closeButton onHide={onCancel}>
      <Modal.Title>Редактирование блока</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <LBlockEditForm />
    </Modal.Body>
    <Modal.Footer>
      <button className="btn btn-danger" type="button" onClick={onDelete}>
        Удалить
      </button>
      <button className="btn btn-primary" type="button">
        Сохранить
      </button>
    </Modal.Footer>
  </Modal>
);

LBlockEditModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,

  onCancel: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default LBlockEditModal;
