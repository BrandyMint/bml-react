import { combineReducers } from 'redux';

import application from './application';
import blocks from './blocks';

export default combineReducers({
  application,
  blocks,
});