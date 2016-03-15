import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import component from './component';

const selector = createStructuredSelector({
  isEditMode: state => state.application.isEditMode,
});

const actions = { };

export default connect(selector, actions)(component);
