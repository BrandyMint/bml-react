import findIndex from 'lodash/findIndex';
import backgroundResolver from 'helpers/backgroundResolver';

export default (state, action) => {
  const { uuid } = action.payload;
  const blockIndex = findIndex(state, { uuid });
  const prevBlockIndex = blockIndex - 1;

  let blocks = state;

  if (blockIndex !== -1) {
    blocks = [...state];
    const block = blocks[blockIndex];
    blocks[blockIndex] = blocks[prevBlockIndex];
    blocks[prevBlockIndex] = block;
  }

  return backgroundResolver(blocks);
};
