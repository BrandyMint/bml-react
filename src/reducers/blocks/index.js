import createReducer from 'helpers/createReducer';

import upBlockPosition from './handlers/upBlockPosition';
import downBlockPosition from './handlers/downBlockPosition';
import switchNextView from './handlers/switchNextView';
import switchPrevView from './handlers/switchPrevView';
import changeBlockField from './handlers/changeBlockField';
import addBlock from './handlers/addBlock';
import deleteBlock from './handlers/deleteBlock';

import {
  UP_BLOCK_POSITION,
  DOWN_BLOCK_POSITION,
  SWITCH_NEXT_VIEW,
  SWITCH_PREV_VIEW,

  CHANGE_BLOCK_CONTENT,

  SUBMIT_ADDING_BLOCK,
  DELETE_EDITING_BLOCK,
} from 'actions/blocks';

const initialState = [];

const handlers = {
  [UP_BLOCK_POSITION]: upBlockPosition,
  [DOWN_BLOCK_POSITION]: downBlockPosition,
  [SWITCH_NEXT_VIEW]: switchNextView,
  [SWITCH_PREV_VIEW]: switchPrevView,

  [CHANGE_BLOCK_CONTENT]: changeBlockField('content'),

  [SUBMIT_ADDING_BLOCK]: addBlock,
  [DELETE_EDITING_BLOCK]: deleteBlock,
};

export default createReducer(initialState, handlers);
