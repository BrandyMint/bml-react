import findIndex from 'lodash/findIndex';
import backgroundResolver from 'helpers/backgroundResolver';

export default (blocks, action) => {
  const { uuid } = action.payload;
  const blockIndex = findIndex(blocks, { uuid });

  let newBlocks;

  if (blockIndex !== -1) {
    newBlocks = [
      ...blocks.slice(0, blockIndex),
      ...blocks.slice(blockIndex + 1),
    ];
  } else {
    newBlocks = blocks;
  }

  return backgroundResolver(newBlocks);
};
