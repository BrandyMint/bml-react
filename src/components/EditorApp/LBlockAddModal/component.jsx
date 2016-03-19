import React, { PropTypes } from 'react';

import Modal from 'components/ui-elements/Modal';
import LBlockAddForm from './LBlockAddForm';

const LBlockAddModal = ({ isVisible, onCancel }) => (
  <Modal show={isVisible}>
    <Modal.Header closeButton onHide={onCancel}>
      <Modal.Title>Выберите блок для вставки</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <LBlockAddForm />
    </Modal.Body>
  </Modal>
);

LBlockAddModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,

  onCancel: PropTypes.func.isRequired,
};

export default LBlockAddModal;
