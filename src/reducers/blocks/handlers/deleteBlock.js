import findIndex from 'lodash/findIndex';
import backgroundResolver from 'helpers/backgroundResolver';

export default (blocks, action) => {
  const { uuid } = action.payload;
  const blockIndex = findIndex(blocks, { uuid });

  if (blockIndex !== -1) {
    return [
      ...blocks.slice(0, blockIndex),
      ...blocks.slice(blockIndex + 1),
    ];
  }

  return backgroundResolver(blocks);
};
