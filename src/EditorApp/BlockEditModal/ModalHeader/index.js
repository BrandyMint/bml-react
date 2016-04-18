import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { editFormBlockSelector } from 'selectors';
import component from './component';
import { cancelEditingBlock, submitEditingBlock } from 'actions/blocks';

const selector = createSelector(
  editFormBlockSelector,
  ({ viewName, uuid }) => ({ viewName, uuid }),
);

const actions = {
  onClose: cancelEditingBlock,
  onSubmit: submitEditingBlock,
};

export default connect(selector, actions)(component);
