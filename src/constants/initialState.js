import { initialState as modalInitialState } from 'reducers/modal';
import { initialState as trackerInitialState } from 'reducers/tracker';
import { initialState as blocksInitialState } from 'reducers/blocks';
import { initialState as applicationInitialState } from 'reducers/application';
import { initialState as activityInitialState } from 'reducers/activity';
import { initialState as addBlockFormInitialState } from 'reducers/addBlockForm';
import { initialState as editBlockFormInitialState } from 'reducers/editBlockForm';

export const initialState = {
  tracker: trackerInitialState,
  application: applicationInitialState,
  blocks: blocksInitialState,
  modal: modalInitialState,
  activity: activityInitialState,
  addBlockForm: addBlockFormInitialState,
  editBlockForm: editBlockFormInitialState,
};

export default initialState;

const editorApplicationInitialState = {
  ...applicationInitialState,
};

export const editorInitialState = {
  ...initialState,
  application: editorApplicationInitialState,
};
