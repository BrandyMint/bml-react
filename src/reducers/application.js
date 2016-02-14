import createReducer from 'helpers/createReducer';

import {
  APP_ACTIVITY_ON,
  APP_ACTIVITY_OFF,
} from 'actions/application';

import {
  LANDING_VERSION_UPDATE_SUCCESS,
  LANDING_VERSION_UPDATE_FAILURE,
  LANDING_VERSION_UPDATE_REQUEST,
} from 'actions/landingVersions';

import {
  UP_BLOCK_POSITION,
  DOWN_BLOCK_POSITION,
  SWITCH_NEXT_VIEW,
  SWITCH_PREV_VIEW,

  CHANGE_BLOCK_CONTENT,

  SUBMIT_ADDING_BLOCK,
  SUBMIT_EDITING_BLOCK,
  DELETE_EDITING_BLOCK,
} from 'actions/blocks';

const initialState = {
  isEditMode: true,
  isSaving: false,
  hasUnsavedChanges: false,

  api_key: '5d8aa2f240c5d05e992e0e84f58ce965',
  landing_version_uuid: '10ba27fa-0628-44fd-af24-8430eea47ca7',

  exitUrl: '/_a/landings/1/analytics',
};

const unsavedChanges = value => state => ({
  ...state, hasUnsavedChanges: value,
});

const savingChanges = value => state => ({
  ...state, isSaving: value,
});

const appActivityOff = state => ({ ...state, controlActivityTimeoutId: null, });

const appActivityOn = (state, action) => {
  return {
  ...state, controlActivityTimeoutId: action.payload.timeoutId,
  };
}

const handlers = {
  [APP_ACTIVITY_ON]: appActivityOn,
  [APP_ACTIVITY_OFF]: appActivityOff,
  [LANDING_VERSION_UPDATE_REQUEST]: savingChanges(true),
  [LANDING_VERSION_UPDATE_FAILURE]: savingChanges(false),
  [LANDING_VERSION_UPDATE_SUCCESS]: state => ({
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

export default createReducer(initialState, handlers);
