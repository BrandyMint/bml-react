import { connect } from 'react-redux';

import { cancelEditingBlock, submitEditingBlock } from 'actions/blocks';

import component from './component';

const selector = state => ({
  savedBlock: state.editBlockForm.block,
});

const actions = {
  onCancel: cancelEditingBlock,
  onSave: submitEditingBlock,
};

export default connect(selector, actions)(component);
