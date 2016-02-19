import createReducer from 'helpers/createReducer';

import upBlockPosition from './handlers/upBlockPosition';
import downBlockPosition from './handlers/downBlockPosition';
import switchNextView from './handlers/switchNextView';
import switchPrevView from './handlers/switchPrevView';
import changeBlockField from './handlers/changeBlockField';
import addBlock from './handlers/addBlock';
import updateBlock from './handlers/updateBlock';
import deleteBlock from './handlers/deleteBlock';

// import defaultBlocks from 'constants/defaultBlocks';

import {
  LANDING_VERSION_LOAD_SUCCESS,
} from 'actions/landingVersions';

import {
  UP_BLOCK_POSITION,
  DOWN_BLOCK_POSITION,
  SWITCH_NEXT_VIEW,
  SWITCH_PREV_VIEW,

  CHANGE_BLOCK_CONTENT,
  CHANGE_BLOCK_NODE_ATTRIBUTES,

  SUBMIT_ADDING_BLOCK,
  SUBMIT_EDITING_BLOCK,
  DELETE_EDITING_BLOCK,
} from 'actions/blocks';

const initialState = [];

const handlers = {
  [UP_BLOCK_POSITION]: upBlockPosition,
  [DOWN_BLOCK_POSITION]: downBlockPosition,
  [SWITCH_NEXT_VIEW]: switchNextView,
  [SWITCH_PREV_VIEW]: switchPrevView,

  [LANDING_VERSION_LOAD_SUCCESS]: (state, { payload }) => (payload.sections),
  // Загружаем дефолтный пример
  // [LANDING_VERSION_LOAD_SUCCESS]: (state, { payload }) => (defaultBlocks),

  [CHANGE_BLOCK_CONTENT]: changeBlockField('content'),
  [CHANGE_BLOCK_NODE_ATTRIBUTES]: changeBlockField('nodeAttributes'),

  [SUBMIT_ADDING_BLOCK]: addBlock,
  [SUBMIT_EDITING_BLOCK]: updateBlock,
  [DELETE_EDITING_BLOCK]: deleteBlock,
};

export default createReducer(initialState, handlers);
