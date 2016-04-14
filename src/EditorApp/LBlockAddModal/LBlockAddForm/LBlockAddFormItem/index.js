import { connect } from 'react-redux';
import { submitAddingBlock } from 'actions/blocks';

import component from './component';

const selector = () => ({});

const actions = {
  onAdd: submitAddingBlock,
};

export default connect(selector, actions)(component);
