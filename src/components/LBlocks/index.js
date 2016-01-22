import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import LBlocks from './LBlocks';

const blocksSelector = state => state.blocks.items;

const lBlocksSelector = createStructuredSelector({
  blocks: blocksSelector,
});

export default connect(lBlocksSelector)(LBlocks);