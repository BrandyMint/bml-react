import createReducer from 'helpers/createReducer';

import {
  START_ADDING_BLOCK,
  CANCEL_ADDING_BLOCK,
  SUBMIT_ADDING_BLOCK,
  SUBMIT_EDITING_BLOCK,

  START_EDITING_BLOCK,
  DELETE_EDITING_BLOCK,
  CANCEL_EDITING_BLOCK,
} from 'actions/blocks';

export const ADD_BLOCK = 'addBlock';
export const EDIT_BLOCK = 'editBlock';

const initialState = {
  current: null,
};

const switchCurrent = current => () => ({ current });

const handlers = {
  [START_ADDING_BLOCK]: switchCurrent(ADD_BLOCK),
  [CANCEL_ADDING_BLOCK]: () => initialState,
  [SUBMIT_ADDING_BLOCK]: () => initialState,
  [SUBMIT_EDITING_BLOCK]: () => initialState,

  [START_EDITING_BLOCK]: switchCurrent(EDIT_BLOCK),
  [DELETE_EDITING_BLOCK]: () => initialState,
  [CANCEL_EDITING_BLOCK]: () => initialState,
};

export default createReducer(initialState, handlers);
