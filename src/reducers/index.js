import { combineReducers } from 'redux';

import addBlockForm from './addBlockForm';
import application from './application';
import blocks from './blocks';
import modal from './modal';

export default combineReducers({
  addBlockForm,
  application,
  blocks,
  modal,
});