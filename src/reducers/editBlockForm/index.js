import createReducer from 'helpers/createReducer';

import {
  START_EDITING_BLOCK_CONTENT,
} from 'actions/blocks';

export const initialState = {
  block: null,
};

const handlers = {
  [START_EDITING_BLOCK_CONTENT]: (state, { payload }) => ({
    ...state,
    block: payload.block,
  }),

  // Ничего не делаем. Блок не меняем. Потому что он нужен для атрисовки анимации при закрытии
  // модалки
  //[SUBMIT_EDITING_BLOCK]: () => initialState,
  //[CANCEL_EDITING_BLOCK]: () => initialState,
};

export default createReducer(initialState, handlers);
