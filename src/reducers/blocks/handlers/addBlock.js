import backgroundResolver from 'helpers/backgroundResolver';

export default (blocks, action) => {
  const { block, position } = action.payload;
  const newState = [...blocks];

  newState.splice(position, 0, block);

  return backgroundResolver(newState);
};
