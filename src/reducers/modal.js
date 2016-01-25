import createReducer from 'helpers/createReducer';

import {
  CANCEL_ADDING_BLOCK,
  START_ADDING_BLOCK,
  SUBMIT_ADDING_BLOCK,
} from 'actions/blocks';

export const ADD_BLOCK = 'addBlock';
export const EDIT_BLOCK = 'editBlock';

const initialState = {
  current: null,
};

const handlers = {
  [START_ADDING_BLOCK]: (state, action) => ({
    current: ADD_BLOCK,
  }),

  [CANCEL_ADDING_BLOCK]: () => initialState,
  [SUBMIT_ADDING_BLOCK]: () => initialState,
};

export default createReducer(initialState, handlers);