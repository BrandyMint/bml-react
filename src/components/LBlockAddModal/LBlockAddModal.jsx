import React, { Component, PropTypes } from 'react';

import bind from 'lodash/bind';

import Modal from 'components/ui-elements/Modal';
import LBlockAddForm from 'components/LBlockAddForm';

const hide = () => {
  console.log('hide');
};

const LBlockAddModal = ({ isVisible, onAdd, onCancel }) => (
  <Modal show={isVisible} onHide={hide}>
    <Modal.Header>
      <Modal.Title>Добавление нового блока</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <LBlockAddForm />
    </Modal.Body>
    <Modal.Footer>
      <button className="btn btn-secondary" type="button" onClick={onCancel}>
        Закрыть
      </button>
      <button className="btn btn-primary" type="button" onClick={onAdd}>
        Добавить
      </button>
    </Modal.Footer>
  </Modal>
);

LBlockAddModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onAdd: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default LBlockAddModal;