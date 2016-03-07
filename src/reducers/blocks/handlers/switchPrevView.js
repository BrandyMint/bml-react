import map from 'lodash/map';

import { viewsRepository } from 'repositories/ViewsRepository';

export default (state, action) => {
  const { uuid } = action.payload;

  return map(state, (block) => {
    if (block.uuid === uuid) {
      const prevView = viewsRepository.getNextView(block.viewName);
      if (prevView) {
        return { ...block, viewName: prevView.viewName };
      }
    }

    return block;
  });
};
