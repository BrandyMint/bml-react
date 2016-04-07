import update from 'helpers/smartUpdate';

import backgroundResolver from 'helpers/backgroundResolver';

export default (blocks, { payload: { block } }) => {
  const selector = (a, b) => a.uuid === b.uuid;

  const newBlocks = update(blocks, block, selector);

  return backgroundResolver(newBlocks);
};
