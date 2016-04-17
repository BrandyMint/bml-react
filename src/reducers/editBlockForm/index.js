import createReducer from 'helpers/createReducer';

import {
  START_EDITING_BLOCK,
  DELETE_EDITING_BLOCK,
} from 'actions/blocks';

import {
  SWITCH_TAB,
  CONTENT_TAB,
} from 'actions/editBlockForm';

export const initialState = {
  block: null,
  tab: CONTENT_TAB,
};

const handlers = {
  [SWITCH_TAB]: (state, { payload }) => ({
    ...state,
    tab: payload.tab,
  }),

  [START_EDITING_BLOCK]: (state, { payload }) => ({
    ...state,
    block: payload.block,
  }),

  [DELETE_EDITING_BLOCK]: (state, { payload }) => {
    if (state.block && state.block.uuid === payload.uuid) {
      return { ...state, block: null };
    }
    return state;
  },

  // Ничего не делаем. Блок не меняем. Потому что он нужен для атрисовки анимации при закрытии
  // модалки
  //[SUBMIT_EDITING_BLOCK]: () => initialState,
  //[CANCEL_EDITING_BLOCK]: () => initialState,
};

export default createReducer(initialState, handlers);
