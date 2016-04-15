import { translate } from 'react-i18next';
import React, { PropTypes } from 'react';

import Dialog from 'material-ui/Dialog';

import LBlockAddForm from './LBlockAddForm';

const LBlockAddModal = ({ t, isVisible, onCancel }) => (
  <Dialog
    title={t('title')}
    open={isVisible}
    modal={false}
    autoScrollBodyContent
    onRequestClose={onCancel}
  >
    <LBlockAddForm />
  </Dialog>
);

LBlockAddModal.propTypes = {
  t: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,

  onCancel: PropTypes.func.isRequired,
};

export default translate('block_add_modal')(LBlockAddModal);
