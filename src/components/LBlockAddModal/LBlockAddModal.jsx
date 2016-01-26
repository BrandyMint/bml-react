import React, { Component, PropTypes } from 'react';

import bind from 'lodash/bind';

import Modal from 'components/ui-elements/Modal';
import LBlockAddForm from 'components/LBlockAddForm';

const LBlockAddModal = ({ isVisible, onAdd, onCancel }) => (
  <Modal show={isVisible}>
    <Modal.Header closeButton onHide={onCancel}>
      <Modal.Title>Добавление нового блока</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <LBlockAddForm />
    </Modal.Body>
    <Modal.Footer>
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