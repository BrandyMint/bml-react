import { connect } from 'react-redux';

import { cancelEditingBlock, submitEditingBlock } from 'actions/blocks';

import { EDIT_BLOCK_CONTENT } from 'reducers/modal';

import component from './component';

const selector = state => ({
  // open: state.modal.current === EDIT_BLOCK_CONTENT,
  savedBlock: state.editBlockContentForm.block,
});

const actions = {
  onCancel: cancelEditingBlock,
  onSave: submitEditingBlock,
};

export default connect(selector, actions)(component);
