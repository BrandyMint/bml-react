import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { startAddingBlock } from 'actions/blocks';

import LBlocks from './LBlocks';

const blocksSelector = state => state.blocks;
const isEditModeSelector = state => state.application.isEditMode;

const selector = createStructuredSelector({
  blocks: blocksSelector,
  isEditMode: isEditModeSelector,
  hasControlActivity: state => state.application.controlActivityTimeoutId > 0,
});

const actions = {
  onAddBlock: startAddingBlock,
};

export default connect(selector, actions)(LBlocks);
