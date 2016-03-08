import { connect } from 'react-redux';
import { createSelector, createStructuredSelector } from 'reselect';

import { cancelAddingBlock, submitAddingBlock } from 'actions/blocks';

import { ADD_BLOCK } from 'reducers/modal';

import LBlockAddModal from './LBlockAddModal';

const currentModalSelector = state => state.modal.current;
const isVisibleSelector = createSelector(
  currentModalSelector,
  currentModal => currentModal === ADD_BLOCK
);

const lBlockAddModalSelector = createStructuredSelector({
  isVisible: isVisibleSelector,
});

const actions = {
  onAdd: submitAddingBlock,
  onCancel: cancelAddingBlock,
};

export default connect(lBlockAddModalSelector, actions)(LBlockAddModal);
