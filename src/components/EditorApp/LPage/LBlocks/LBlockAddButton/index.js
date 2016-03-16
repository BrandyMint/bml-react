import { connect } from 'react-redux';
import { startAddingBlock } from 'actions/blocks';

import component from './component';

const selector = () => ({});

const actions = {
  onAddBlock: startAddingBlock,
};

export default connect(selector, actions)(component);
