import size from 'lodash/size';
import findIndex from 'lodash/findIndex';

export default (state, action) => {
  const { uuid } = action.payload;
  const blockIndex = findIndex(state, { uuid });
  const nextBlockIndex = blockIndex + 1;

  let newState = state;

  if (size(state) > nextBlockIndex) {
    newState = [...state];
    const block = newState[blockIndex];
    newState[blockIndex] = newState[nextBlockIndex];
    newState[nextBlockIndex] = block;
  }

  return newState;
};
