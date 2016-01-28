export default (state, action) => {
  const { block, position } = action.payload;
  const newState = [...state];

  newState.splice(position, 0, block);

  return newState;
};