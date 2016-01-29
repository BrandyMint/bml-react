import createReducer from 'helpers/createReducer';

import {
  CANCEL_EDITING_BLOCK, START_EDITING_BLOCK,
} from 'actions/blocks';

const initialState = {
  uuid: '',
  type: '',
  view: '',
  data: {},
};

const handlers = {
  [START_EDITING_BLOCK]: (state, action) => ({
    ...action.payload.block,
  }),

  [CANCEL_EDITING_BLOCK]: () => initialState,
};

export default createReducer(initialState, handlers);
