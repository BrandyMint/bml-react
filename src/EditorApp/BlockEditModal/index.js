import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { EDIT_BLOCK_CONTENT } from 'reducers/modal';
import { isModalOpenSelector, editBlockFormTabSelector } from 'selectors';
import { cancelEditingBlock } from 'actions/blocks';

import component from './component';

const selector = createStructuredSelector({
  open: isModalOpenSelector(EDIT_BLOCK_CONTENT),
  tab: editBlockFormTabSelector,
  expand: ({modal}) => modal.expand,
});

const actions = {
  onClose: cancelEditingBlock,
};

export default connect(selector, actions)(component);
