import createReducer from 'helpers/createReducer';

import {
  CANCEL_ADDING_BLOCK,
  START_ADDING_BLOCK,
  SUBMIT_ADDING_BLOCK,
} from 'actions/blocks';

export const initialState = {
  selectedIndex: null,
  position: null,
};

const handlers = {
  [START_ADDING_BLOCK]: (state, action) => ({
    ...state,
    position: action.payload.position,
  }),
  [CANCEL_ADDING_BLOCK]: () => initialState,
  [SUBMIT_ADDING_BLOCK]: () => initialState,
};

export default createReducer(initialState, handlers);
