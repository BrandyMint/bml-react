import findIndex from 'lodash/findIndex';

export default (state, action) => {
  const { uuid } = action.payload;
  const blockIndex = findIndex(state, { uuid });
  const prevBlockIndex = blockIndex - 1;

  let newState = state;

  if (blockIndex !== -1) {
    newState = [...state];
    const block = newState[blockIndex];
    newState[blockIndex] = newState[prevBlockIndex];
    newState[prevBlockIndex] = block;
  }

  return newState;
};
