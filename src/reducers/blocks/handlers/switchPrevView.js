import map from 'lodash/map';

import { viewsRepository } from 'repositories/ViewsRepository';

export default (state, action) => {
  const { uuid } = action.payload;

  return map(state, (block) => {
    if (block.uuid === uuid) {
      const prevView = viewsRepository.getNextView(block.view);
      if (prevView) {
        return { ...block, view: prevView.viewName };
      }
    }

    return block;
  });
};
