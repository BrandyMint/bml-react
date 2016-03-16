import size from 'lodash/size';
import findIndex from 'lodash/findIndex';
import backgroundResolver from 'helpers/backgroundResolver';

export default (state, action) => {
  const { uuid } = action.payload;
  const blockIndex = findIndex(state, { uuid });
  const nextBlockIndex = blockIndex + 1;

  let blocks = state;

  if (size(state) > nextBlockIndex) {
    blocks = [...state];
    const block = blocks[blockIndex];
    blocks[blockIndex] = blocks[nextBlockIndex];
    blocks[nextBlockIndex] = block;
  }

  return backgroundResolver(blocks);
};
