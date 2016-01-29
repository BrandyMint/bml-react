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
        const nextViewIndex = viewIndex + 1 !== blockViewsCount ? viewIndex + 1 : 0;
        const nextView = blockViews[nextViewIndex];

        return { ...block, view: nextView.view };
      }
    }

    return block;
  });
};
