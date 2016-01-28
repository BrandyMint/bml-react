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

  CHANGE_BLOCK_FIELD,

  SUBMIT_ADDING_BLOCK,
  DELETE_EDITING_BLOCK,
} from 'actions/blocks';

import {
  CONTENT_SECTION_TYPE1, CTA_TYPE1, FOOTER_TYPE1, MUST_READ_TYPE1, NAVBAR_TYPE1,
} from 'constants/blockTypesKeys';

import {
  CONTENT_SECTION_TYPE1_VIEW1,
  CONTENT_SECTION_TYPE1_VIEW2,
  CONTENT_SECTION_TYPE1_VIEW3,

  CTA_TYPE1_VIEW1,

  FOOTER_TYPE1_VIEW1,

  MUST_READ_TYPE1_VIEW1,

  NAVBAR_TYPE1_VIEW1,
} from 'constants/blockViewsKeys';

const initialState = [];

const handlers = {
  [UP_BLOCK_POSITION]: upBlockPosition,
  [DOWN_BLOCK_POSITION]: downBlockPosition,
  [SWITCH_NEXT_VIEW]: switchNextView,
  [SWITCH_PREV_VIEW]: switchPrevView,

  [CHANGE_BLOCK_FIELD]: changeBlockField,

  [SUBMIT_ADDING_BLOCK]: addBlock,
  [DELETE_EDITING_BLOCK]: deleteBlock,
};

export default createReducer(initialState, handlers);