import map from 'lodash/map';

import { viewsRepository } from 'views/all';

export default (state, action) => {
  const { uuid } = action.payload;

  return map(state, (block) => {
    if (block.uuid === uuid) {
      const nextView = viewsRepository.getNextView(block.view);
      if (nextView) {
        return { ...block, view: nextView.name };
      }
    }

    return block;
  });
};
