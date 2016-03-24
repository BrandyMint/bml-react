import map from 'lodash/map';
import backgroundResolver from 'helpers/backgroundResolver';

import { viewsRepository } from 'repositories/ViewsRepository';

export default (state, action) => {
  const { uuid } = action.payload;

  const blocks = map(state, (block) => {
    if (block.uuid === uuid) {
      const prevView = viewsRepository.getPrevView(block.viewName);
      if (prevView) {
        return { ...block, viewName: prevView.viewName };
      }
    }

    return block;
  });

  return backgroundResolver(blocks);
};
