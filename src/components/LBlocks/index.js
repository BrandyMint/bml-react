import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { startAddingBlock } from 'actions/blocks';

import LBlocks from './LBlocks';

const blocksSelector = state => state.blocks;
const isEditModeSelector = state => state.application.isEditMode;

const lBlocksSelector = createStructuredSelector({
  blocks: blocksSelector,
  isEditMode: isEditModeSelector,
});

const actions = {
  onAddBlock: startAddingBlock,
};

export default connect(lBlocksSelector, actions)(LBlocks);
