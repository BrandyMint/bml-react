import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { setCurrentBlock, startAddingBlock } from 'actions/blocks';

import LBlocks from './LBlocks';

const selector = createStructuredSelector({
  blocks: state => state.blocks,
  currentBlockUuid: state => state.application.currentBlockUuid,
  hasControlActivity: state => state.application.controlActivityTimeoutId > 0,
});

const actions = {
  onAddBlock: startAddingBlock,
  onCurrentBlock: setCurrentBlock,
};

export default connect(selector, actions)(LBlocks);
