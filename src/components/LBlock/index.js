import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { changeContent } from 'actions/blocks';

import LBlock from './LBlock';

const isEditModeSelector = state => state.application.isEditMode;

const lBlockSelector = createStructuredSelector({
  isEditMode: isEditModeSelector,
});

const actions = {
  onContentChange: changeContent,
};

export default connect(lBlockSelector, actions)(LBlock);
