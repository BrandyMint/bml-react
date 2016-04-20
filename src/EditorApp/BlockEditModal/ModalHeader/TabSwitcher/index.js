import component from './component';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { switchTab } from 'actions/editBlockForm';

const selector = createSelector(
  ({ editBlockForm }) => editBlockForm,
  ({ tab, block: { viewName } }) => ({ tab, viewName }),
);

const actions = {
  switchTab: switchTab,
}

export default connect(selector, actions)(component);
