import component from './component';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { switchTab } from 'actions/editBlockForm';
import { editBlockFormTabSelector } from 'selectors';

const selector = createStructuredSelector({
  tab: editBlockFormTabSelector,
});

const actions = {
  switchTab: switchTab,
}

export default connect(selector, actions)(component);
