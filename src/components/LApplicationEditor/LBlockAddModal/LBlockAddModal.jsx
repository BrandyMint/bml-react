import React, { PropTypes } from 'react';

import Modal from 'components/ui-elements/Modal';
import LBlockAddForm from './LBlockAddForm';

const LBlockAddModal = ({ isVisible, onAdd, onCancel }) => (
  <Modal show={isVisible}>
    <Modal.Header closeButton onHide={onCancel}>
      <Modal.Title>Выберите блок для вставки</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <LBlockAddForm onAdd={onAdd}/>
    </Modal.Body>
  </Modal>
);

LBlockAddModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,

  onAdd: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default LBlockAddModal;
