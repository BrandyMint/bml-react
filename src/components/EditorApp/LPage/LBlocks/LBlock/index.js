import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { changeContent } from 'actions/blocks';

import LBlock from './LBlock';

const selector = createStructuredSelector({
  // TODO Перетащить непосредственно на примитивы
  isEditMode: state => state.application.isEditMode,
});

const actions = {
  onContentChange: changeContent,
};

export default connect(selector, actions)(LBlock);
