import { connect } from 'react-redux';

import { cancelEditingBlock, submitEditingBlock } from 'actions/blocks';

import { EDIT_BLOCK } from 'reducers/modal';

import LBlockEditModal from './LBlockEditModal';

import './LBlockEditModal.css';

const selector = state => ({
  isVisible: state.modal.current === EDIT_BLOCK,
  savedBlock: state.editBlockForm.block,
});

const actions = {
  onCancel: cancelEditingBlock,
  onSave: submitEditingBlock,
};

export default connect(selector, actions)(LBlockEditModal);
