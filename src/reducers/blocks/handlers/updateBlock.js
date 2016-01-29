import map from 'lodash/map';

export default (state, action) => {
  const { block } = action.payload;

  return map(state, (_block) =>
    block.uuid === _block.uuid ? block : _block
  );
};
