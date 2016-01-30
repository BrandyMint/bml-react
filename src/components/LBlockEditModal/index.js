import { connect } from 'react-redux';
import { createSelector, createStructuredSelector } from 'reselect';

import { cancelEditingBlock, deleteEditingBlock, submitEditingBlock } from 'actions/blocks';

import { EDIT_BLOCK } from 'reducers/modal';

import LBlockEditModal from './LBlockEditModal';

import './LBlockEditModal.css';

const currentModalSelector = state => state.modal.current;

const isVisibleSelector = createSelector(
  currentModalSelector,
  currentModal => currentModal === EDIT_BLOCK
);

const lBlockEditModalSelector = createStructuredSelector({
  isVisible: isVisibleSelector,
});

const actions = {
  onCancel: cancelEditingBlock,
  onDelete: deleteEditingBlock,
  onSave: submitEditingBlock,
};

export default connect(lBlockEditModalSelector, actions)(LBlockEditModal);
