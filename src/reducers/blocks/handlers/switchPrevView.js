import map from 'lodash/map';
import size from 'lodash/size';
import findIndex from 'lodash/findIndex';

import BLOCK_VIEWS from 'constants/blockViews';

export default (state, action) => {
  const { uuid } = action.payload;

  return map(state, (block) => {
    if (block.uuid === uuid) {
      const blockViews = BLOCK_VIEWS[block.type];
      const blockViewsCount = size(blockViews);

      if (blockViewsCount > 1) {
        const view = block.view;
        const viewIndex = findIndex(blockViews, { view });
        const prevViewIndex = viewIndex <= 0 ? blockViewsCount - 1 : viewIndex - 1;
        const prevView = blockViews[prevViewIndex];

        return { ...block, view: prevView.view };
      }
    }

    return block;
  });
};
