import createReducer from 'helpers/createReducer';

import {
  CHANGE_ZOOM,
  RESTORE_SITE,
  TOGGLE_MENU,
  CLOSE_MENU,
  CHANGE_EDITABLE,
} from 'actions/application';

import {
  CHANGE_THEME,
  TOGGLE_BOXED_LAYOUT,
} from 'actions/site';

import {
  LANDING_VARIANT_UPDATE_SUCCESS,
  LANDING_VARIANT_UPDATE_FAILURE,
  LANDING_VARIANT_UPDATE_REQUEST,

  LANDING_VARIANT_LOAD_REQUEST,
  LANDING_VARIANT_LOAD_SUCCESS,
  LANDING_VARIANT_LOAD_FAILURE,

  BACKGROUND_UPLOAD_REQUEST,
  BACKGROUND_UPLOAD_SUCCESS,
  BACKGROUND_UPLOAD_FAILURE,
} from 'actions/variants';

import {
  UP_BLOCK_POSITION,
  DOWN_BLOCK_POSITION,
  SWITCH_NEXT_VIEW,
  SWITCH_PREV_VIEW,

  CHANGE_BLOCK_CONTENT,
  CHANGE_BLOCK_FORM,
  CHANGE_BLOCK_BACKGROUND_IMAGE,
  CHANGE_BLOCK_NODE_ATTRIBUTES,

  SUBMIT_ADDING_BLOCK,
  SUBMIT_EDITING_BLOCK,
  DELETE_EDITING_BLOCK,

  CURRENT_BLOCK,
} from 'actions/blocks';

import {
  LOADING_STATE_NONE,
  LOADING_STATE_LOADING,
  LOADING_STATE_FAILURE,
  LOADING_STATE_LOADED,
} from 'constants/loadingStates';

import BLANK_SITE from 'constants/blankSite';

export const initialState = {
  exitUrl: '/',
  variantUuid: null,

  loadingState: LOADING_STATE_NONE,

  enableMenu: true,

  // Are we in editor mode?
  //
  isSaving: false,
  isMenuOpen: false,
  hasUnsavedChanges: false,

  // The component which editing now (Editable or EditableButtons)
  editable: null,

  // Original (backup) version of site
  originalSite: BLANK_SITE,

  zoom: false,
};

const unsavedChanges = value => state => {
  if (state.hasUnsavedChanges === value) {
    return state;
  }

  return { ...state, hasUnsavedChanges: value };
}
const savingChanges = value => state => ({
  ...state, isSaving: value,
});

const currentBlock = (state, action) => ({
  ...state, currentBlockUuid: action.payload.uuid,
});

const successUpdate = (state, { payload }) => ({
  ...state,
  isSaving: false,
  hasUnsavedChanges: false,
  originalSite: payload,
});

const toggleMenu = (state) => ({
  ...state,
  isMenuOpen: !state.isMenuOpen,
});

const closeMenu = (state) => ({
  ...state,
  isMenuOpen: false,
});

const changeEditable = (state, { payload }) => ({
  ...state,
  editable: payload,
});

const handlers = {
  [CHANGE_ZOOM]: (state, { payload }) => ({ ...state, zoom: payload }),
  [CURRENT_BLOCK]: currentBlock,

  [LANDING_VARIANT_LOAD_REQUEST]: state => ({ ...state, loadingState: LOADING_STATE_LOADING }),
  [LANDING_VARIANT_LOAD_FAILURE]: state => ({ ...state, loadingState: LOADING_STATE_FAILURE }),
  [LANDING_VARIANT_LOAD_SUCCESS]: (state, { payload }) => ({
    ...state,
    loadingState: LOADING_STATE_LOADED,
    variantUuid: payload.uuid,
    originalSite: payload,
  }),

  [LANDING_VARIANT_UPDATE_REQUEST]: savingChanges(true),
  [LANDING_VARIANT_UPDATE_FAILURE]: savingChanges(false),
  [LANDING_VARIANT_UPDATE_SUCCESS]: successUpdate,

  [DOWN_BLOCK_POSITION]: unsavedChanges(true),
  [UP_BLOCK_POSITION]: unsavedChanges(true),
  [SWITCH_NEXT_VIEW]: unsavedChanges(true),
  [SWITCH_PREV_VIEW]: unsavedChanges(true),
  [SUBMIT_ADDING_BLOCK]: unsavedChanges(true),
  [SUBMIT_EDITING_BLOCK]: unsavedChanges(true),

  [CHANGE_BLOCK_CONTENT]: unsavedChanges(true),
  [CHANGE_BLOCK_FORM]: unsavedChanges(true),
  [CHANGE_BLOCK_NODE_ATTRIBUTES]: unsavedChanges(true),
  [CHANGE_BLOCK_BACKGROUND_IMAGE]: unsavedChanges(true),

  [DELETE_EDITING_BLOCK]: unsavedChanges(true),
  [CHANGE_THEME]: unsavedChanges(true),
  [TOGGLE_BOXED_LAYOUT]: unsavedChanges(true),
  [RESTORE_SITE]: unsavedChanges(false),

  [TOGGLE_MENU]: toggleMenu,
  [CLOSE_MENU]: closeMenu,
  [CHANGE_EDITABLE]: changeEditable,

  [BACKGROUND_UPLOAD_REQUEST]: state => ({ ...state, backgroundUploading: true }),
  [BACKGROUND_UPLOAD_SUCCESS]: state => ({ ...state, backgroundUploading: false }),
  [BACKGROUND_UPLOAD_FAILURE]: state => ({ ...state, backgroundUploading: false }),
};

export default createReducer(initialState, handlers);
