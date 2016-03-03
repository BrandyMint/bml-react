import { connect } from 'react-redux';
import { createSelector, createStructuredSelector } from 'reselect';

import { cancelEditingBlock, deleteEditingBlock, submitEditingBlock } from 'actions/blocks';

import { EDIT_BLOCK } from 'reducers/modal';

import LBlockEditModal from './LBlockEditModal';

import './LBlockEditModal.css';

const selector = state => ({
  isVisible: state.modal.current == EDIT_BLOCK,
  block: state.editBlockForm.block,
});

const actions = {
  onCancel: cancelEditingBlock,
  onDelete: deleteEditingBlock,
  onSave: submitEditingBlock,
};

export default connect(selector, actions)(LBlockEditModal);
