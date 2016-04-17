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

import {
  EXPAND_MODAL,
  COLLAPSE_MODAL,
} from 'actions/modal';


// Names of opened modals
//
export const ADD_BLOCK = 'addBlock';
export const EDIT_BLOCK_CONTENT = 'editBlockContent';

export const initialState = {
  current: null,
  expand: false,
};

const switchCurrent = current => () => ({ current, expand: false });

const handlers = {
  [START_ADDING_BLOCK]: switchCurrent(ADD_BLOCK),
  [CANCEL_ADDING_BLOCK]: () => initialState,
  [SUBMIT_ADDING_BLOCK]: () => initialState,

  [START_EDITING_BLOCK]: switchCurrent(EDIT_BLOCK_CONTENT),
  [DELETE_EDITING_BLOCK]: () => initialState,
  [CANCEL_EDITING_BLOCK]: () => initialState,
  [SUBMIT_EDITING_BLOCK]: () => initialState,

  [EXPAND_MODAL]: (state) => ({ ...state, expand: true }),
  [COLLAPSE_MODAL]: (state) => ({ ...state, expand: false }),
};

export default createReducer(initialState, handlers);
