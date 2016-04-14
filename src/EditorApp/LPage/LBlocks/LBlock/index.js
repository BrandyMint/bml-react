import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { changeContent } from 'actions/blocks';

import component from './component';

const selector = createStructuredSelector({});

const actions = {
  onContentChange: changeContent,
};

export default connect(selector, actions)(component);
