import findIndex from 'lodash/findIndex';

export default (state, action) => {
  const { uuid } = action.payload;
  const blockIndex = findIndex(state, { uuid });

  if (blockIndex != -1) {
    return [
      ...state.slice(0, blockIndex),
      ...state.slice(blockIndex + 1),
    ];
  } else {
    return state;
  }
};