import map from 'lodash/map';
import backgroundResolver from 'helpers/backgroundResolver';

export default (state, action) => {
  const { block } = action.payload;

  const blocks = map(state, (_block) => block.uuid === _block.uuid ? block : _block);

  return backgroundResolver(blocks);
};
