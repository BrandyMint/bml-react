import createReducer from 'helpers/createReducer';

import map from 'lodash/map';
import size from 'lodash/size';
import assign from 'lodash/assign';
import findIndex from 'lodash/findIndex';

import {
  DOWN_BLOCK_POSITION, UP_BLOCK_POSITION, SWITCH_NEXT_VIEW, SWITCH_PREV_VIEW
} from 'actions/blocks';

import {
  CONTENT_SECTION_TYPE, CTA_TYPE, FOOTER_TYPE, MUST_READ_TYPE, NAVBAR_TYPE,
} from 'constants/blockTypesKeys';

import {
  CONTENT_SECTION_VIEW_V1,
  CONTENT_SECTION_VIEW_V2,
  CONTENT_SECTION_VIEW_V3,

  CTA_VIEW_V1,

  FOOTER_VIEW_V1,

  MUST_READ_VIEW_V1,

  NAVBAR_VIEW_V1,
} from 'constants/blockViewsKeys';

const initialState = {
  items: [],
  types: [],
  views: {},
};

const handlers = {
  [DOWN_BLOCK_POSITION]: (state, action) => {
    const { uuid } = action.payload;
    const { items } = state;

    const itemIndex = findIndex(items, { uuid });
    const nextItemIndex = itemIndex + 1;

    let newItems = items;

    if (size(items) > nextItemIndex) {
      newItems = [...items];
      const item = newItems[itemIndex];
      newItems[itemIndex] = newItems[nextItemIndex];
      newItems[nextItemIndex] = item;
    }

    return assign({}, state, { items: newItems });
  },

  [UP_BLOCK_POSITION]: (state, action) => {
    const { uuid } = action.payload;
    const { items } = state;

    const itemIndex = findIndex(items, { uuid });
    const prevItemIndex = itemIndex - 1;

    let newItems = items;

    if (itemIndex) {
      newItems = [...items];
      const item = newItems[itemIndex];
      newItems[itemIndex] = newItems[prevItemIndex];
      newItems[prevItemIndex] = item;
    }

    return assign({}, state, { items: newItems });
  },

  [SWITCH_NEXT_VIEW]: (state, action) => {
    const { uuid } = action.payload;
    const { items, views } = state;

    const newItems = map(items, (item) => {
      if (item.uuid === uuid) {
        const itemViews = views[item.type];
        const itemViewsCount = size(itemViews);

        if (itemViewsCount > 1) {
          const view = item.view;
          const viewIndex = findIndex(itemViews, { view });
          const nextViewIndex = viewIndex + 1 !== itemViewsCount ? viewIndex + 1 : 0;
          const nextView = itemViews[nextViewIndex];

          return {
            ...item,
            view: nextView.view,
          };
        }
      }

      return item;
    });

    return assign({}, state, { items: newItems });
  },

  [SWITCH_PREV_VIEW]: (state, action) => {
    const { uuid } = action.payload;
    const { items, views } = state;

    const newItems = map(items, (item) => {
      if (item.uuid === uuid) {
        const itemViews = views[item.type];
        const itemViewsCount = size(itemViews);

        if (itemViewsCount > 1) {
          const view = item.view;
          const viewIndex = findIndex(itemViews, { view });
          const prevViewIndex = viewIndex <= 0 ? itemViewsCount - 1 : viewIndex - 1;
          const prevView = itemViews[prevViewIndex];

          return {
            ...item,
            view: prevView.view,
          };
        }
      }

      return item;
    });

    return assign({}, state, { items: newItems });
  },
};

export default createReducer(initialState, handlers);