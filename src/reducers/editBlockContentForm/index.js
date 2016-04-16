import createReducer from 'helpers/createReducer';

import {
  CANCEL_EDITING_BLOCK, START_EDITING_BLOCK_CONTENT, SUBMIT_EDITING_BLOCK,
} from 'actions/blocks';

export const initialState = {
  block: null,
};

const handlers = {
  [START_EDITING_BLOCK_CONTENT]: (state, { payload }) => ({
    ...state,
    block: payload.block,
  }),

  [SUBMIT_EDITING_BLOCK]: () => initialState,
  [CANCEL_EDITING_BLOCK]: () => initialState,
};

export default createReducer(initialState, handlers);
