import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { startAddingBlock } from 'actions/blocks';

import LBlocks from './LBlocks';

const selector = createStructuredSelector({
  blocks: state => state.blocks,
  hasControlActivity: state => state.application.controlActivityTimeoutId > 0,
});

const actions = {
  onAddBlock: startAddingBlock,
};

export default connect(selector, actions)(LBlocks);
