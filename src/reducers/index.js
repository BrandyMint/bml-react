import { combineReducers } from 'redux';

import addBlockForm from './addBlockForm';
import application from './application';
import blocks from './blocks';
import editBlockForm from './editBlockForm';
import modal from './modal';

export default combineReducers({
  addBlockForm,
  application,
  blocks,
  editBlockForm,
  modal,
});
