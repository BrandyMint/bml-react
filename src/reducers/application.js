import createReducer from 'helpers/createReducer';

import {
  APP_ACTIVITY_ON,
  APP_ACTIVITY_OFF,
} from 'actions/application';

import {
  LANDING_VARIANT_UPDATE_SUCCESS,
  LANDING_VARIANT_UPDATE_FAILURE,
  LANDING_VARIANT_UPDATE_REQUEST,

  LANDING_VARIANT_LOAD_REQUEST,
  LANDING_VARIANT_LOAD_SUCCESS,
  LANDING_VARIANT_LOAD_FAILURE,
} from 'actions/variants';

import {
  UP_BLOCK_POSITION,
  DOWN_BLOCK_POSITION,
  SWITCH_NEXT_VIEW,
  SWITCH_PREV_VIEW,

  CHANGE_BLOCK_CONTENT,

  SUBMIT_ADDING_BLOCK,
  SUBMIT_EDITING_BLOCK,
  DELETE_EDITING_BLOCK,

  CURRENT_BLOCK,
} from 'actions/blocks';

import initialState from 'constants/initialState';

import {
  LOADING_STATE_LOADING,
  LOADING_STATE_FAILURE,
  LOADING_STATE_LOADED,
} from 'constants/loadingStates';

const unsavedChanges = value => state => ({
  ...state, hasUnsavedChanges: value,
});

const savingChanges = value => state => ({
  ...state, isSaving: value,
});

const appActivityOff = state => ({
  ...state,
  controlActivityTimeoutId: null,
});

const appActivityOn = (state, action) => ({
  ...state, controlActivityTimeoutId: action.payload.timeoutId,
});

const currentBlock = (state, action) => ({
  ...state, currentBlockUuid: action.payload.uuid,
});

const handlers = {
  [CURRENT_BLOCK]: currentBlock,

  [APP_ACTIVITY_ON]: appActivityOn,
  [APP_ACTIVITY_OFF]: appActivityOff,

  [LANDING_VARIANT_LOAD_REQUEST]: state => ({ ...state, loadingState: LOADING_STATE_LOADING }),
  [LANDING_VARIANT_LOAD_FAILURE]: state => ({ ...state, loadingState: LOADING_STATE_FAILURE }),
  [LANDING_VARIANT_LOAD_SUCCESS]: (state, { payload }) =>
    ({ ...state, loadingState: LOADING_STATE_LOADED, variantUuid: payload.uuid }),

  [LANDING_VARIANT_UPDATE_REQUEST]: savingChanges(true),
  [LANDING_VARIANT_UPDATE_FAILURE]: savingChanges(false),
  [LANDING_VARIANT_UPDATE_SUCCESS]: state => ({
    ...state,
    isSaving: false,
    hasUnsavedChanges: false,
  }),
  [DOWN_BLOCK_POSITION]: unsavedChanges(true),
  [UP_BLOCK_POSITION]: unsavedChanges(true),
  [SWITCH_NEXT_VIEW]: unsavedChanges(true),
  [SWITCH_PREV_VIEW]: unsavedChanges(true),
  [SUBMIT_ADDING_BLOCK]: unsavedChanges(true),
  [SUBMIT_EDITING_BLOCK]: unsavedChanges(true),
  [CHANGE_BLOCK_CONTENT]: unsavedChanges(true),
  [DELETE_EDITING_BLOCK]: unsavedChanges(true),
};

export default createReducer(initialState.application, handlers);
