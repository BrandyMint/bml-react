import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import backgroundResolver from 'helpers/backgroundResolver';

import { startAddingBlock } from 'actions/blocks';

import component from './component';

const selector = createStructuredSelector({
  blocks: state => backgroundResolver(state.blocks),
});

const actions = {
  onAddBlock: startAddingBlock,
};

export default connect(selector, actions)(component);
