import { connect } from 'react-redux';
import { createSelector, createStructuredSelector } from 'reselect';

import { cancelAddingBlock } from 'actions/blocks';

import { ADD_BLOCK } from 'reducers/modal';

import component from './component';

const currentModalSelector = state => state.modal.current;
const isVisibleSelector = createSelector(
  currentModalSelector,
  currentModal => currentModal === ADD_BLOCK
);

const selector = createStructuredSelector({
  isVisible: isVisibleSelector,
});

const actions = {
  onCancel: cancelAddingBlock,
};

export default connect(selector, actions)(component);
