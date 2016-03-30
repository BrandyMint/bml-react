import React, { PropTypes } from 'react';
import { translate } from 'react-i18next';

import Modal from 'components/ui-elements/Modal';
import LBlockEditForm from './LBlockEditForm';

const LBlockEditModal = ({ t, block, isVisible, onCancel, onDelete, onSave }) => (
  <Modal show={isVisible} className="modal EditorModal LBlockEditModal">
    <Modal.Header closeButton onHide={onCancel}>
      <Modal.Title>{t('title', { name: block.viewName })}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <LBlockEditForm />
    </Modal.Body>
    <Modal.Footer>
      <button
        className="btn btn-danger pull-left"
        type="button"
        onClick={onDelete}
      >
        {t('remove_block')}
      </button>
      <button
        className="btn btn-primary pull-right"
        type="button"
        onClick={onSave}
      >
        {t('ok')}
      </button>
    </Modal.Footer>
  </Modal>
);

LBlockEditModal.propTypes = {
  t: PropTypes.func.isRequired,

  isVisible: PropTypes.bool.isRequired,

  onCancel: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,

  block: PropTypes.object.isRequired,
};

export default translate('block_edit_modal')(LBlockEditModal);
