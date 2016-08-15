import { saveChanges } from 'actions/variants';
import includes from 'lodash/includes';
import { AUTO_SAVE_TIMEOUT } from 'constants/config';
import {
  DOWN_BLOCK_POSITION,
  UP_BLOCK_POSITION,
  SWITCH_NEXT_VIEW,
  SWITCH_PREV_VIEW,
  SUBMIT_ADDING_BLOCK,
  SUBMIT_EDITING_BLOCK,
  CHANGE_BLOCK_CONTENT,
  CHANGE_BLOCK_FORM,
  CHANGE_BLOCK_NODE_ATTRIBUTES,
  CHANGE_BLOCK_BACKGROUND_IMAGE,
  DELETE_EDITING_BLOCK,
  CHANGE_THEME,
  TOGGLE_BOXED_LAYOUT,
} from 'actions/blocks';

const ACTIONS = [
  DOWN_BLOCK_POSITION,
  UP_BLOCK_POSITION,
  SWITCH_NEXT_VIEW,
  SWITCH_PREV_VIEW,
  SUBMIT_ADDING_BLOCK,
  SUBMIT_EDITING_BLOCK,
  CHANGE_BLOCK_CONTENT,
  CHANGE_BLOCK_FORM,
  CHANGE_BLOCK_NODE_ATTRIBUTES,
  CHANGE_BLOCK_BACKGROUND_IMAGE,
  DELETE_EDITING_BLOCK,
  CHANGE_THEME,
  TOGGLE_BOXED_LAYOUT,
];

let timeout = {};

function autoSave (store) {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    store.dispatch(saveChanges());
  }, AUTO_SAVE_TIMEOUT);
}

export default store => next => action => {
  if(includes(ACTIONS, action.type)) autoSave(store);
  return next(action);
};
