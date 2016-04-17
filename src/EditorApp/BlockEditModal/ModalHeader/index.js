import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { cancelEditingBlock } from 'actions/blocks';

import { editFormBlockSelector } from 'selectors';
import component from './component';

const selector = createSelector(
  editFormBlockSelector,
  ({ viewName, uuid }) => ({ viewName, uuid }),
);

const actions = {
  onClose: cancelEditingBlock,
};

export default connect(selector, actions)(component);
