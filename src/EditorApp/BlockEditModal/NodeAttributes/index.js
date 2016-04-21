import { connect } from 'react-redux';
import component from './component';
import { createSelector } from 'reselect';
import { changeNodeAttribute } from 'actions/blocks';
import { editBlockSelector } from 'selectors';

const selector = createSelector(
  editBlockSelector,
  ({ nodeAttributes, uuid }) => ({ nodeAttributes, uuid }),
);

const actions = { changeNodeAttribute };
export default connect(selector, actions)(component);
