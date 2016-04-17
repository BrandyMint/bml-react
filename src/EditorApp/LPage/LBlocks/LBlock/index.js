import { connect } from 'react-redux';
import { changeContent } from 'actions/blocks';

import component from './component';

const selector = () => ({});

const actions = {
  onContentChange: changeContent,
};

export default connect(selector, actions)(component);
