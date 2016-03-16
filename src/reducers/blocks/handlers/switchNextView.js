import map from 'lodash/map';
import backgroundResolver from 'helpers/backgroundResolver';

import { viewsRepository } from 'repositories/ViewsRepository';

export default (state, action) => {
  const { uuid } = action.payload;

  const blocks = map(state, (block) => {
    if (block.uuid === uuid) {
      const nextView = viewsRepository.getNextView(block.viewName);
      if (nextView) {
        return { ...block, viewName: nextView.viewName };
      }
    }

    return block;
  });

  return backgroundResolver(blocks);
};
