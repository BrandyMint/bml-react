import createReducer from 'helpers/createReducer';

import {
  CANCEL_ADDING_BLOCK,
  SELECT_BLOCK_FOR_ADDING,
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
  [SELECT_BLOCK_FOR_ADDING]: (state, action) => ({
    ...state,
    selectedIndex: action.payload.index,
  }),
  [CANCEL_ADDING_BLOCK]: () => initialState,
  [SUBMIT_ADDING_BLOCK]: () => initialState,
};

export default createReducer(initialState, handlers);
