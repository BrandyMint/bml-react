import React, { PropTypes } from 'react';
import { translate } from 'react-i18next';

import FlatButton from 'material-ui/lib/flat-button';
import Dialog from 'material-ui/lib/dialog';
// import Modal from 'components/ui-elements/Modal';
import LBlockEditForm from './LBlockEditForm';

const LBlockEditModal = ({ t, savedBlock, isVisible, onCancel, onDelete, onSave }) => {
  const actions = [
    <FlatButton
      label={t('delete')}
      secondary
      onTouchTap={onDelete}
    />,
    <FlatButton
      label={t('cancel')}
      secondary
      onTouchTap={onCancel}
    />,
    <FlatButton
      label={t('submit')}
      primary
      keyboardFocused
      onTouchTap={onSave}
    />,
  ];

  return (
    <Dialog
      title={t('title', { name: savedBlock.viewName })}
      open={isVisible}
      modal={false}
      actions={actions}
      autoScrollBodyContent
      onRequestClose={onCancel}
    >
      <LBlockEditForm />
    </Dialog>
  );
};

LBlockEditModal.propTypes = {
  t: PropTypes.func.isRequired,

  isVisible: PropTypes.bool.isRequired,

  onCancel: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,

  savedBlock: PropTypes.object.isRequired,
};

export default translate('block_edit_modal')(LBlockEditModal);
