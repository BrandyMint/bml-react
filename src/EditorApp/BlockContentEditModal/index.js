import { connect } from 'react-redux';
import { createSelector, createStructuredSelector } from 'reselect';
import { EDIT_BLOCK_CONTENT } from 'reducers/modal';

import component from './component';

const currentModalSelector = state => state.modal.current;
const isOpenSelector = createSelector(
  currentModalSelector,
  currentModal => currentModal === EDIT_BLOCK_CONTENT
);

const formSelector = ({ editBlockContentForm }) => editBlockContentForm;
const blockSelector = createSelector( formSelector, ({ block }) => block );
const uuidSelector = createSelector( blockSelector, ({ uuid }) => uuid );

const selector = createStructuredSelector({
  open: isOpenSelector,
  uuid: uuidSelector,
});

export default connect(selector)(component);
