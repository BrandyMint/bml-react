import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { changeContent } from 'actions/blocks';

import LBlock from './LBlock';

const selector = createStructuredSelector({
  isEditMode: state => state.application.isEditMode,
});

const actions = {
  onContentChange: changeContent,
};

export default connect(selector, actions)(LBlock);
